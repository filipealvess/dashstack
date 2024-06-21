"use client";

import { BarChart2, Clock, Package, Users } from "react-feather";
import * as Styles from "@/app/dashboard/(dashboard)/styles";
import SummaryCard from "@/components/cards/Summary";
import SalesChart from "@/components/charts/Sales";
import { Spacer } from "@/components/styled/Spacer";
import DealsTable from "@/components/tables/Deals";
import Section from "@/components/wrappers/Section";

function Index() {
    return (
        <Styles.Container>
            <Styles.Header>
                <h1>Dashboard</h1>
            </Styles.Header>

            <Styles.Summary>
                <SummaryCard
                    color="#3D42DF"
                    icon={<Users />}
                    rate={8.5}
                    rateLabel="Up from yesterday"
                    title="Total User"
                    value="40,689"
                />

                <SummaryCard
                    color="#DDA727"
                    icon={<Package />}
                    rate={1.3}
                    rateLabel="Up from past week"
                    title="Total Order"
                    value="10293"
                />

                <SummaryCard
                    color="#4AD991"
                    icon={<BarChart2 />}
                    rate={-4.3}
                    rateLabel="Up from yesterday"
                    title="Total Sales"
                    value="$89,000"
                />

                <SummaryCard
                    color="#FF9066"
                    icon={<Clock />}
                    rate={1.8}
                    rateLabel="Up from yesterday"
                    title="Total Pending"
                    value="2040"
                />
            </Styles.Summary>

            <SalesChart />

            <Spacer $height={24} />

            <Section title="Deals Details">
                <DealsTable />
            </Section>
        </Styles.Container>
    );
}

export default Index;
