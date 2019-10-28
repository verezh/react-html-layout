import React from "react";
import "./index.scss";
import { Layout } from "../../react-html-layout";
import { ControlPanel, ControlOptions } from "../../components/control-panel";
import autobind from "autobind-decorator";
import { Content } from "../../components";
import { Drawer } from "@blueprintjs/core";
import { DrawerButton } from "../../components/drawer-button";

interface State extends ControlOptions {
    isOpen: boolean;
}

export class SimplePage extends React.PureComponent<any, State> {
    constructor(props: State) {
        super(props);
        this.state = {
            isOpen: false,
            fixedHeader: true,
            fixedFooter: false,
        };
    }

    public render(): React.ReactNode {
        const { isOpen, ...options } = this.state;
        return (
            <React.Fragment>
                <Layout header={undefined} footer={undefined} {...options}>
                    <Content />
                </Layout>
                {/* <Layout header={<div>Header</div>} footer={<div>Footer</div>}>
                    <div>Content</div>
                </Layout> */}
                <DrawerButton onClick={this.onOpen} />
                <Drawer isOpen={isOpen} canOutsideClickClose={true} onClose={this.onOpen} position="left" size={250}>
                    <ControlPanel {...options} onChange={this.onSidebarChange} />
                </Drawer>
            </React.Fragment>
        );
    }

    @autobind
    private onSidebarChange(props: ControlOptions): void {
        this.setState({ ...props });
    }

    @autobind
    private onOpen(): void {
        this.setState({ isOpen: !this.state.isOpen });
    }
}
