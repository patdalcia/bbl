import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_C2bD6FdP.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<h1 id=\"this-is-the-first-slide-it-has-been-rendered-from-markdown\">This is the first slide, it has been rendered from markdown.</h1>\n<h2 id=\"this-is-the-second-line\">This is the second line.</h2>\n<h3 id=\"this-is-third-line\">This is third Line.</h3>";

				const frontmatter = {"title":"FirstSlide"};
				const file = "C:/Users/thegr/Desktop/websites/bbl/src/content/slideContent/firstSlide.md";
				const url = undefined;
				function rawContent() {
					return "# This is the first slide, it has been rendered from markdown.\r\n## This is the second line.\r\n### This is third Line.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"this-is-the-first-slide-it-has-been-rendered-from-markdown","text":"This is the first slide, it has been rendered from markdown."},{"depth":2,"slug":"this-is-the-second-line","text":"This is the second line."},{"depth":3,"slug":"this-is-third-line","text":"This is third Line."}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
