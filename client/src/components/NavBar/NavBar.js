import _ from "lodash";
import './NavBar.css';

import React, { Component } from "react";
import { render } from "react-dom";
import {
Container,
Icon,
Image,
Menu,
Header,
Sidebar,
Responsive
} from "semantic-ui-react";

const style = {
    width: "100%"
    
}

const King = require('./king.jpg');
const Board = require('./board.jpg');
const Pieces = require('./pieces.jpg');
// Mobile Info
const NavBarMobile = ({
children,
leftItems,
onPusherClick,
onToggle,
rightItems,
visible
}) => (
<Sidebar.Pushable>
<Sidebar
as={Menu}
animation="overlay"
icon="labeled"
inverted
items={leftItems}
vertical
visible={visible}
/>
<Sidebar.Pusher
dimmed={visible}
onClick={onPusherClick}
style={{ minHeight: "97vh" }}
>
<Menu fixed="top" inverted>

<Menu.Item>
<Image size="mini" src={King} />
</Menu.Item>
<Menu.Item id="side-bar" onClick={onToggle}>
<Icon style={style} name="sidebar" />
</Menu.Item>
<Header inverted  id="mobile-title" > CCLA</Header>

<Menu.Menu position="right">
{_.map(rightItems, item => <Menu.Item {...item} />)}

</Menu.Menu>
</Menu>
{children}
<Header  id="header"> Correspondence Chess League of America </Header>
<Image style={style} src={Board} />
<Container id="tag-line">
<p>  Serving the North American Correspondence chess community since 1909 </p>
<p> We are so glad that you found us.  </p>
</Container>
<Image  style={style} id="pieces"  src={Pieces} />
</Sidebar.Pusher>
</Sidebar.Pushable>

);

// Desktop Info
const NavBarDesktop = ({ leftItems, rightItems }) => (
<Menu fixed="top" inverted>

<Menu.Item>
<Image size="tiny" src={King} />
</Menu.Item>
{_.map(leftItems, item => <Menu.Item {...item} />)}
<Menu.Item>  Test </Menu.Item>


<Header inverted id="title" > Correspondence Chess League of America </Header>

<Menu.Menu position="right">
{_.map(rightItems, item => <Menu.Item {...item} />)}
</Menu.Menu>
</Menu>
);

const NavBarChildren = ({ children }) => (
<Container style={{ marginTop: "5em" }}>{children}</Container>
);


// start of NavBar Class  
class NavBar extends Component {
state = {
visible: false
};

handlePusher = () => {
const { visible } = this.state;

if (visible) this.setState({ visible: false });
};

handleToggle = () => this.setState({ visible: !this.state.visible });

render() {
const { children, leftItems, rightItems } = this.props;
const { visible } = this.state;

return (
<div>
<Responsive {...Responsive.onlyMobile}>
<NavBarMobile
leftItems={leftItems}
onPusherClick={this.handlePusher}
onToggle={this.handleToggle}
rightItems={rightItems}
visible={visible}
>
<NavBarChildren>{children}


</NavBarChildren>
</NavBarMobile>
</Responsive>
<Responsive minWidth={Responsive.onlyTablet.minWidth}>
<NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
<NavBarChildren>{children}</NavBarChildren>
</Responsive>
</div>
);
}
}


export default NavBar;