import React from "react";
import { GraphItem, Section } from "./Style";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsGraphs = ({ data }) => {
    const [graph, setGraph] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        const graphData = data.map((item) => {
            return {
                x: item.title,
                y: Number(item.acessos),
            };
        });
        if (data.length > 0) {
            setTotal(
                data
                    .map(({ acessos }) => Number(acessos))
                    .reduce((acc, item) => acc + item)
            );
        }
        setGraph(graphData);
    }, [data]);

    return (
        <Section className="animeLeft">
            <GraphItem total>
                <p>Acessos: {total}</p>
            </GraphItem>
            <GraphItem>
                <VictoryPie
                    data={graph}
                    innerRadius={50}
                    padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
                    style={{
                        data: {
                            fillOpacity: 0.9,
                            stroke: "#fff",
                            strokeWidth: 2,
                        },
                        labels: { fontSize: 14, fill: "#333" },
                    }}
                />
            </GraphItem>
            <GraphItem>
                <VictoryChart>
                    <VictoryBar alignment="start" data={graph}/>
                </VictoryChart>
            </GraphItem>
        </Section>
    );
};

export default UserStatsGraphs;
