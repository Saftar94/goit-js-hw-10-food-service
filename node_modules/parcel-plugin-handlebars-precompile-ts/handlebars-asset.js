const Handlebars = require("handlebars");
const TSAsset = require("parcel-bundler/src/assets/TypeScriptAsset");

class HbsAsset extends TSAsset {
  async pretransform() {
    const precompiled = Handlebars.precompile(this.contents);
    this.contents = `
                import * as Handlebars from 'handlebars/dist/handlebars.runtime';
                const templateFunction = Handlebars.template(${precompiled});
                export default templateFunction;
                `;

    return await super.pretransform();
  }
}

module.exports = HbsAsset;
