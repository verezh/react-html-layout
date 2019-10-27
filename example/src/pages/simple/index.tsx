import React from "react";
import "./index.scss";
import { Layout } from "../../react-html-layout";
import { MasterPage } from "../../components/master-page";
import { ControlPanel, IControlOptions } from "../../components/control-panel";
import autobind from "autobind-decorator";
import { Sidebar, Content } from "../../components";
import { Header } from "../../components/header";
import { Drawer } from "@blueprintjs/core";
import { DrawerButton } from "../../components/drawer-button";

interface IState extends IControlOptions {
  isOpen: boolean;
}

export class SimplePage extends React.PureComponent<any, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {
      isOpen: false,
      contentWidth: 800,
      fixedHeader: false,
    };
  }

  public render(): React.ReactNode {
    const { isOpen, ...options } = this.state;
    return (
      //   <MasterPage sidebar={<ControlPanel {...state} onChange={this.onSidebarChange} />}>
      //     <Layout sidebar={<Sidebar />} header={<Header />} {...state}>
      //       <Content />
      //     </Layout>
      //   </MasterPage>
      <React.Fragment>
        <Layout sidebar={<Sidebar />} header={<Header />} {...options}>
          <Content />
        </Layout>
        <DrawerButton onClick={this.onOpen} />
        <Drawer isOpen={isOpen} canOutsideClickClose={true} onClose={this.onOpen} position="left" size={250}>
          <ControlPanel {...options} onChange={this.onSidebarChange} />
        </Drawer>
      </React.Fragment>
    );
  }

  @autobind
  private onSidebarChange(props: IControlOptions): void {
    this.setState({ ...props });
  }

  @autobind
  private onOpen(): void {
    this.setState({ isOpen: !this.state.isOpen });
  }
}
