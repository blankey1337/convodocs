import "nextra-theme-docs/style.css";

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`

        .docs-search > span {
          width: 100%;
        }
        .docs-search {
          max-width: 500px;
        }
        .docs-search input {
          padding-left: 35px;
        }
        .dark .docs-search input {
          border: 2px solid #4464bd77;
          background-color: #111;
        }

        .dark .sidebar li.active>a {
          background-color: #0083ff5c !important;
        }

        .dark .sidebar a:hover,
        .dark .sidebar button:hover {
          background-color: #0083ff1c !important;
        }

        .search-icon {
          position: absolute;
          left: 10px;
          top: 10px;
        }

        .search-slash {
          position: absolute;
          right: 10px;
          top: 6px;
          padding: 7px;
          background: #eef2f7;
          border-radius: 4px;
        }

        .dark .search-slash {
          background: #1e2d76;
        }

        .card {
          color:black;
          border-color: #80808029;
        }
        .card:hover {
          border-color:white;
        }

        .dark .card {
          color:white;
          border-color: #80808029;
        }
        .dark .card:hover {
          border-color:white;
        }

        .copied_hint {
          position: absolute;
          top: -2px;
          right: 30px;
        }

        a, code {
          line-break: anywhere !important;
        }

        @media (min-width: 768px){
          .md\:w-64 {
              width: 18rem !important;
          }
        }

        .docs-search > span {
          width: 100%;
        }

        .algolia-autocomplete .algolia-docsearch-suggestion--category-header span {
          display: inline-block;
        }
        .algolia-autocomplete .ds-dropdown-menu {
          width: 500px;
          min-width: 300px;
          max-width: calc(100vw - 50px);
        }

        /* Hack to make the TOC links look better by adjusting kerning */
        article > main + div a.font-semibold {
          font-weight: 500;
          letter-spacing: -0.01rem;
        }

        .dark .invert-on-dark {
          filter: invert(1) brightness(1.8);
        }

        .react-tabs {
          -webkit-tap-highlight-color: transparent;
          margin-top: 20px;
          border-radius: 0.5rem;
          border-width: 1px;
          border-color: rgba(226, 232, 240);
          border-width: 1px;
        }
        .react-tabs__tab-list {
          padding: 0 20px 0 15px;
          border-top-left-radius: 0.5rem;
          border-top-right-radius: 0.5rem;
          border-bottom: 1px solid rgba(226, 232, 240);
          margin: 0;
          min-width: 500px;
        }
        .react-tabs__tab {
          display: inline-block;
          border: 1px solid transparent;
          border-bottom: none;
          position: relative;
          list-style: none;
          cursor: pointer;
          padding: 10px;
          margin-top: 0;
        }
        .react-tabs__tab--selected {
          border-radius: 5px 5px 0 0;
          background-color: transparent;
          border-color: transparent;
          border-bottom: 4px solid #3dbff5 !important;
          top: 6px;
        }
        .react-tabs__tab--disabled {
          color: GrayText;
          cursor: default;
        }
        .react-tabs__tab:focus {
          box-shadow: 0 0 5px hsl(208, 99%, 50%);
          border-color: hsl(208, 99%, 50%);
          outline: none;
        }
        .react-tabs__tab:focus:after {
          content: '';
          position: absolute;
          height: 5px;
          left: -4px;
          right: -4px;
          bottom: -5px;
          background: #fff;
        }
        .react-tabs__tab-panel {
          display: none;
        }
        .react-tabs__tab-panel--selected {
          display: block;
          padding: 20px;
        }
        .react-tabs__tab .label-icon {
          height: 20px;
          width: 20px;
          margin-right: 15px;
          margin-top: 2px;
        }
        .react-tabs__tab .label-icon svg {
          height: 100%;
          margin: 0 auto;
        }
        .react-tabs__tab .label-text,
        .react-tabs__tab .label-icon {
          float:left;
        }
        .react-tabs__tab--selected .label-text,
        .react-tabs__tab--selected .label-icon {
          position: relative;
          top: -2px;
        }
        .tablist-wrapper {
          overflow-x: auto;
        }
        /* Dark */
        .dark .react-tabs {
          border-color: rgba(226, 232, 240, 0.5);
        }
        .dark .react-tabs__tab-list {
          border-bottom: 1px solid rgba(226, 232, 240, 0.5);
        }

      `}</style>
      <Component {...pageProps} />
    </>
  );
}
