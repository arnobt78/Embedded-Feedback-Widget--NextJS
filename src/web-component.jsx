import React from "react";
import { createRoot } from "react-dom/client";
import Widget from "./components/Widget";
import tailwindStyles from "./app/globals.css?inline";

export const normalizeAttribute = (attribute) => {
  return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

class WidgetWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes();
    const root = createRoot(this.shadowRoot);
    root.render(
      <>
        <style>{tailwindStyles}</style>
        <Widget {...props} apiBase={props.apiBase} />
      </>
    );
  }

  getPropsFromAttributes() {
    const props = {};
    for (const { name, value } of this.attributes) {
      props[normalizeAttribute(name)] = value;
    }
    // If apiBase is not set, default to "/api/feedback"
    if (!props.apiBase) {
      props.apiBase = "/api/feedback";
    }
    return props;
  }
}

if (!customElements.get("my-widget")) {
  customElements.define("my-widget", WidgetWebComponent);
}

export { WidgetWebComponent };
