import { For } from "solid-js";

function NavBar(props) {
  const NavBarOptions = ["All Todos", "Completed Todos"];

  return (
    <div>
      <For each={NavBarOptions}>
        {(item) => (
          <span
            style={{
              padding: "10px",
              display: "inline-block",
              "font-weight": `${props.selectedNav() === item ? `bold` : ""}`,
              "text-decoration": `${
                props.selectedNav() === item ? `underline` : ""
              }`,
            }}
            onClick={() => props.setNavBar(item)}
          >
            {item}
          </span>
        )}
      </For>
    </div>
  );
}

export default NavBar;
