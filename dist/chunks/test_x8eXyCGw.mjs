import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_C2bD6FdP.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<h1 id=\"this-is-a-test-post-lets-see-if-it-works\">This is a test post lets see if it works</h1>";

				const frontmatter = {"title":"test"};
				const file = "C:/Users/thegr/Desktop/websites/bbl/src/content/placeholder/test.md";
				const url = undefined;
				function rawContent() {
					return "# This is a test post lets see if it works";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"this-is-a-test-post-lets-see-if-it-works","text":"This is a test post lets see if it works"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
