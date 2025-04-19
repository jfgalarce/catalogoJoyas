import { c as createComponent, r as renderTemplate, f as renderComponent } from '../chunks/astro/server_DkhmgbiQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DalR6Chx.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import { FaPrint } from 'react-icons/fa6';
export { renderers } from '../renderers.mjs';

const Qr = ({ domain }) => {
  const [numero, setNumero] = useState(1);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 p-2", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "range",
          className: "print:hidden",
          min: 1,
          max: 48,
          value: numero,
          onChange: (e) => setNumero(e.target.value)
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: "print:hidden border p-1 rounded-lg cursor-pointer shadow hover:bg-slate-300",
          id: "btnPrint",
          onClick: () => window.print(),
          children: [
            /* @__PURE__ */ jsx(FaPrint, { className: "size-10" }),
            " ",
            numero
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: " flex flex-wrap w-full bg-slate-200 items-start justify-evenly gap-2 ", children: [...Array(parseInt(numero))].map((_, key) => /* @__PURE__ */ jsx("div", { className: "border-2", children: /* @__PURE__ */ jsx(
      QRCodeSVG,
      {
        fgColor: 2,
        value: domain,
        size: 150,
        level: "H",
        marginSize: 1
      }
    ) }, key)) })
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Imprimir = createComponent(($$result, $$props, $$slots) => {
  const apiUrl = "http://192.168.2.3:3000";
  return renderTemplate(_a || (_a = __template(["", " <script></script>"])), renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Qr", Qr, { "client:load": true, "domain": apiUrl, "client:component-hydration": "load", "client:component-path": "/home/node/app/catalogoJoyas/src/components/react/Qr", "client:component-export": "default" })} ` }));
}, "/home/node/app/catalogoJoyas/src/pages/imprimir.astro", void 0);
const $$file = "/home/node/app/catalogoJoyas/src/pages/imprimir.astro";
const $$url = "/imprimir";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Imprimir,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
