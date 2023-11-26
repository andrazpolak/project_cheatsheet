import Link from "next/link";
import React from "react";
import { Nav } from "rsuite";

const NavLink = React.forwardRef((props, ref) => {
  const { as, href, children, ...rest } = props;
  return (
    <Link href={href} as={as} ref={ref} {...rest}>
      {children}
    </Link>
  );
});
NavLink.displayName = "NavLink";

export default function Navbar() {
  const [active, setActive] = React.useState("/");
  return (
    <>
      <Nav
        appearance="tabs"
        activeKey={active}
        onSelect={setActive}
        style={{ marginBottom: 50 }}
      >
        <Nav.Item as={NavLink} href="/">
          Home
        </Nav.Item>
        <Nav.Item as={NavLink} href="/regex">
          Regex
        </Nav.Item>
        <Nav.Item as={NavLink} href="/python">
          Python
        </Nav.Item>
      </Nav>
    </>
  );
}
