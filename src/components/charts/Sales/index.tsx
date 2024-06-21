import { ResponsiveLine } from "@nivo/line";
import config from "@/components/charts/Sales/config";
import sales from "@/components/charts/Sales/mock";
import * as Styles from "@/components/charts/Sales/styles";
import Section from "@/components/wrappers/Section";

function SalesChart() {
    return (
        <Section title="Sales Details">
            <Styles.ChartWrapper>
                <ResponsiveLine
                    animate
                    axisLeft={{
                        format: (value) => value + "%",
                    }}
                    colors={[config.COLOR]}
                    curve="monotoneX"
                    data={sales}
                    defs={config.defs}
                    enableArea
                    enableSlices="x"
                    fill={config.fill}
                    margin={config.margin}
                />
            </Styles.ChartWrapper>
        </Section>
    );
}

export default SalesChart;
