 
import * as htmlCommentRegex from "html-comment-regex"

const cleanEntities = svg => {
	const entityRegex = /\s*<!Entity\s+\S*\s*(?:"|')[^"]+(?:"|')\s*>/img;
	// Remove entities
	return svg.replace(entityRegex, '');
};

const regex = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?(?:<svg[^>]*>[^]*<\/svg>|<svg[^/>]*\/\s*>)\s*$/i;


export function isSvg(input){
    return Boolean(input) && regex.test(cleanEntities(input.toString()).replace(htmlCommentRegex, ''));
}