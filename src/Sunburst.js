import React, {
    Component
} from 'react';
import * as d3 from "d3";
import "./Sunburst.css";

class Sunburst extends Component {

    constructor(props) {
        super();
        this.state = {
            data: props.data,
        }
    }
    componentDidMount() {
        this.drawChart(this.state.data);
    }

    shouldComponentUpdate() {
        return false;
    }

    partition(data) {
        const root = d3.hierarchy(data)
            .sum(d => d.value)
            .sort((a, b) => b.value - a.value);
        return d3.partition().size([2 * Math.PI, root.height + 1])(root);
    }

    arcVisible(d) {
        return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
    }

    labelVisible(d) {
        return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
    }

    labelTransform(d, radius) {
        const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
        const y = (d.y0 + d.y1) / 2 * radius;
        return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    }

    drawChart() {
        const svg = d3.select("svg")

        const root = this.partition(this.state.data);
        root.each(d => d.current = d);

        const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, this.state.data.children.length + 1))

        const format = d3.format(",d")

        const radius = Math.min(parseInt(svg.style('width')), parseInt(svg.style('height'))) / 6 - parseInt(svg.style('padding-top'));

        const arc = d3.arc()
            .startAngle(d => d.x0)
            .endAngle(d => d.x1)
            .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
            .padRadius(radius * 1.5)
            .innerRadius(d => d.y0 * radius)
            .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))

        const clicked = p => {
            parent.datum(p.parent || root);

            root.each(d => d.target = {
                x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                y0: Math.max(0, d.y0 - p.depth),
                y1: Math.max(0, d.y1 - p.depth)
            });

            const t = g.transition().duration(750);

            path.transition(t)
                .tween("data", d => {
                    const i = d3.interpolate(d.current, d.target);
                    return t => d.current = i(t);
                })
                .filter(
                    function(d) {
                        return this.getAttribute("fill-opacity") || this.arcVisible(d.target);
                    }
                )
                .attr(
                    "fill-opacity", d => this.arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
                .attrTween("d", d => () => arc(d.current));

            label.filter(
                function(d) {
                    return this.getAttribute("fill-opacity") || this.labelVisible(d.target);
                }
            )
            .transition(t)
            .attr("fill-opacity", d => + this.labelVisible(d.target))
            .attrTween("transform", d => () => this.labelTransform(d.current, radius));
        }

        //2. Create the group
        const g = svg.append("g")
            .attr("transform", `translate(${parseInt(svg.style('width')) / 2},${parseInt(svg.style('height')) / 2})`);

        const path = g.selectAll("path")
            .data(root.descendants().slice(1))
            .join("path")
            .attr("fill", d => {
                while (d.depth > 1)
                    d = d.parent;
                return color(d.data.name);
            })
            .attr("fill-opacity", d => this.arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0)
            .attr("d", d => arc(d.current));
        path.filter(d => d.children)
            .style("cursor", "pointer").on("click", clicked);

        path.append("title")
            .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

        var label = g.append("g")
            .attr("pointer-events", "none")
            .attr("text-anchor", "middle")
            .style("user-select", "none")
            .selectAll("text")
            .data(root.descendants().slice(1))
            .join("text")
            .attr("dy", "0.35em")
            .attr("fill-opacity", d => + this.labelVisible(d.current))
            .attr("transform", d => this.labelTransform(d.current, radius))
            .text(d => d.data.name);

        const parent = g.append("circle")
            .datum(root)
            .attr("r", radius)
            .attr("fill", "none")
            .attr("pointer-events", "all")
            .on("click", clicked);


    }

    render() {
        return <svg></svg>;
    }

}

export default Sunburst;
