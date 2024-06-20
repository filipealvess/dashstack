import { TrendingUp, TrendingDown } from "react-feather";
import * as Styles from "@/components/cards/Summary/styles";

import type { IProps } from "@/components/cards/Summary/index.d";

function SummaryCard({ color, icon, rate, rateLabel, title, value }: IProps) {
    return (
        <Styles.Container>
            <Styles.Header $color={color}>
                <p>{title}</p>

                <div>{icon}</div>
            </Styles.Header>

            <Styles.Value>{value}</Styles.Value>

            <Styles.Footer $trend={rate >= 0 ? "up" : "down"}>
                <div>
                    {rate >= 0 ? (
                        <TrendingUp size={16} color="#00B69B" />
                    ) : (
                        <TrendingDown size={16} color="#F93C65" />
                    )}

                    <span>{Math.abs(rate)}%</span>
                </div>

                <p>{rateLabel}</p>
            </Styles.Footer>
        </Styles.Container>
    );
}

export default SummaryCard;
