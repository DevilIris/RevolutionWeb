this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["products-attribute"]=function(t){function e(e){for(var o,i,a=e[0],u=e[1],s=e[2],b=0,d=[];b<a.length;b++)i=a[b],n[i]&&d.push(n[i][0]),n[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);for(l&&l(e);d.length;)d.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],o=!0,a=1;a<r.length;a++){var u=r[a];0!==n[u]&&(o=!1)}o&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},n={14:0},c=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=u;return c.push([542,1,3,2,0]),r()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},17:function(t,e){!function(){t.exports=this.wp.apiFetch}()},18:function(t,e){!function(){t.exports=this.wp.editor}()},27:function(t,e){!function(){t.exports=this.wp.blocks}()},3:function(t,e){!function(){t.exports=this.wp.components}()},30:function(t,e){!function(){t.exports=this.wp.compose}()},35:function(t,e){!function(){t.exports=this.wp.url}()},38:function(t,e){!function(){t.exports=this.wp.keycodes}()},4:function(t,e){!function(){t.exports=this.lodash}()},41:function(t,e,r){"use strict";var o=r(15),n=r.n(o),c=r(0),i=r(1),a=r(5),u=r.n(a),s=r(3),l=function(t){var e=t.onChange,r=t.settings,o=r.button,a=r.price,u=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(s.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return e(n()({},r,{title:!l}))}}),Object(c.createElement)(s.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:a?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:a,onChange:function(){return e(n()({},r,{price:!a}))}}),Object(c.createElement)(s.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:u?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:u,onChange:function(){return e(n()({},r,{rating:!u}))}}),Object(c.createElement)(s.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:o?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return e(n()({},r,{button:!o}))}}))};l.propTypes={settings:u.a.shape({button:u.a.bool.isRequired,price:u.a.bool.isRequired,title:u.a.bool.isRequired}).isRequired,onChange:u.a.func.isRequired},e.a=l},42:function(t,e,r){"use strict";var o=r(0),n=r(6),c=r.n(n),i=r(59),a=r.n(i);r.d(e,"a",function(){return u});var u=function(t){return function(e){var r=e.attributes,n=r.align,i=r.contentVisibility,u=c()(n?"align".concat(n):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(o.createElement)(o.RawHTML,{className:u},function(t,e){var r=t.attributes,o=r.attributes,n=r.attrOperator,c=r.categories,i=r.catOperator,u=r.orderby,s=r.products,l=r.columns||wc_product_block_data.default_columns,b=r.rows||wc_product_block_data.default_rows,d=new Map;switch(d.set("limit",b*l),d.set("columns",l),c&&c.length&&(d.set("category",c.join(",")),i&&"all"===i&&d.set("cat_operator","AND")),o&&o.length&&(d.set("terms",o.map(function(t){return t.id}).join(",")),d.set("attribute",o[0].attr_slug),n&&"all"===n&&d.set("terms_operator","AND")),u&&("price_desc"===u?(d.set("orderby","price"),d.set("order","DESC")):"price_asc"===u?(d.set("orderby","price"),d.set("order","ASC")):"date"===u?(d.set("orderby","date"),d.set("order","DESC")):d.set("orderby",u)),e){case"woocommerce/product-best-sellers":d.set("best_selling","1");break;case"woocommerce/product-top-rated":d.set("orderby","rating");break;case"woocommerce/product-on-sale":d.set("on_sale","1");break;case"woocommerce/product-new":d.set("orderby","date"),d.set("order","DESC");break;case"woocommerce/handpicked-products":if(!s.length)return"";d.set("ids",s.join(",")),d.set("limit",s.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!o||!o.length)return""}var p="[products",g=!0,m=!1,f=void 0;try{for(var _,h=d[Symbol.iterator]();!(g=(_=h.next()).done);g=!0){var w=a()(_.value,2);p+=" "+w[0]+'="'+w[1]+'"'}}catch(t){m=!0,f=t}finally{try{g||null==h.return||h.return()}finally{if(m)throw f}}return p+="]"}(e,t))}}},46:function(t,e,r){"use strict";var o=r(0),n=r(1),c=r(4),i=r(5),a=r.n(i),u=r(3),s=function(t){var e=t.columns,r=t.rows,i=t.setAttributes;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(u.RangeControl,{label:Object(n.__)("Columns","woo-gutenberg-products-block"),value:e,onChange:function(t){var e=Object(c.clamp)(t,wc_product_block_data.min_columns,wc_product_block_data.max_columns);i({columns:Object(c.isNaN)(e)?"":e})},min:wc_product_block_data.min_columns,max:wc_product_block_data.max_columns}),Object(o.createElement)(u.RangeControl,{label:Object(n.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(t){var e=Object(c.clamp)(t,wc_product_block_data.min_rows,wc_product_block_data.max_rows);i({rows:Object(c.isNaN)(e)?"":e})},min:wc_product_block_data.min_rows,max:wc_product_block_data.max_rows}))};s.propTypes={columns:a.a.oneOfType([a.a.number,a.a.string]).isRequired,rows:a.a.oneOfType([a.a.number,a.a.string]).isRequired,setAttributes:a.a.func.isRequired},e.a=s},50:function(t,e){!function(){t.exports=this.ReactDOM}()},51:function(t,e){!function(){t.exports=this.wp.viewport}()},533:function(t,e,r){var o=r(534);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(66)(o,n);o.locals&&(t.exports=o.locals)},534:function(t,e,r){},542:function(t,e,r){"use strict";r.r(e);var o=r(0),n=r(1),c=r(74),i=r.n(c),a=r(27),u=(r(533),r(22)),s=r.n(u),l=r(23),b=r.n(l),d=r(24),p=r.n(d),g=r(25),m=r.n(g),f=r(26),_=r.n(f),h=r(18),w=r(3),O=r(5),j=r.n(O),y=r(41),k=r(46),v=r(77),C=r.n(v),E=r(53),S=r.n(E),x=r(170),A=r.n(x),P=r(15),R=r.n(P),T=r(33),M=r.n(T),q=r(35),N=r(17),D=r.n(N),L=r(4),B=r(37),I=(r(535),function(t){function e(){var t;return s()(this,e),(t=p()(this,m()(e).apply(this,arguments))).state={list:[],loading:!0,attribute:0,termsList:{},termsLoading:!0},t.debouncedGetTerms=Object(L.debounce)(t.getTerms.bind(M()(t)),200),t.renderItem=t.renderItem.bind(M()(t)),t.onSelectAttribute=t.onSelectAttribute.bind(M()(t)),t}return _()(e,t),b()(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.selected;D()({path:Object(q.addQueryArgs)("/wc-blocks/v1/products/attributes",{per_page:-1})}).then(function(r){r=r.map(function(t){return R()({},t,{parent:0})}),t.setState(function(t){var o=t.attribute;if(!o&&e.length>0){var n=Object(L.find)(r,{slug:e[0].attr_slug});o=n?n.id:0}return{list:r,attribute:o,loading:!1}})}).catch(function(){t.setState({list:[],loading:!1})})}},{key:"componentDidUpdate",value:function(t,e){e.attribute!==this.state.attribute&&this.debouncedGetTerms()}},{key:"getTerms",value:function(){var t=this,e=this.state,r=e.attribute,o=e.termsList;r&&(o[r]||this.setState({termsLoading:!0}),D()({path:Object(q.addQueryArgs)("/wc-blocks/v1/products/attributes/".concat(r,"/terms"),{per_page:-1})}).then(function(e){e=e.map(function(t){return R()({},t,{parent:r,attr_slug:t.attribute.slug})}),t.setState(function(t){return{termsList:R()({},t.termsList,A()({},r,e)),termsLoading:!1}})}).catch(function(){t.setState({termsLoading:!1})}))}},{key:"onSelectAttribute",value:function(t){var e=this;return function(){e.props.onChange([]),e.setState({attribute:t.id===e.state.attribute?0:t.id})}}},{key:"renderItem",value:function(t){var e=t.item,r=t.search,c=t.depth,i=void 0===c?0:c,a=this.state,u=a.attribute,s=a.termsLoading,l=["woocommerce-product-attributes__item","woocommerce-search-list__item"];return r.length&&l.push("is-searching"),0===i&&0!==e.parent&&l.push("is-skip-level"),e.breadcrumbs.length?Object(o.createElement)(B.b,S()({className:l.join(" ")},t,{showCount:!0,"aria-label":"".concat(e.breadcrumbs[0],": ").concat(e.name)})):[Object(o.createElement)(B.b,S()({key:"attr-".concat(e.id)},t,{className:l.join(" "),isSelected:u===e.id,onSelect:this.onSelectAttribute,isSingle:!0,disabled:"0"===e.count,"aria-expanded":u===e.id,"aria-label":Object(n.sprintf)(Object(n._n)("%s, has %d term","%s, has %d terms",e.count,"woo-gutenberg-products-block"),e.name,e.count)})),u===e.id&&s&&Object(o.createElement)("div",{key:"loading",className:"woocommerce-search-list__item woocommerce-product-attributes__itemdepth-1 is-loading is-not-active"},Object(o.createElement)(w.Spinner,null))]}},{key:"render",value:function(){var t=this.state,e=t.attribute,r=t.list,c=t.loading,i=t.termsList,a=this.props,u=a.onChange,s=a.onOperatorChange,l=a.operator,b=a.selected,d=i[e]||[],p=[].concat(C()(r),C()(d)),g={clear:Object(n.__)("Clear all product attributes","woo-gutenberg-products-block"),list:Object(n.__)("Product Attributes","woo-gutenberg-products-block"),noItems:Object(n.__)("Your store doesn't have any product attributes.","woo-gutenberg-products-block"),search:Object(n.__)("Search for product attributes","woo-gutenberg-products-block"),selected:function(t){return Object(n.sprintf)(Object(n._n)("%d attribute selected","%d attributes selected",t,"woo-gutenberg-products-block"),t)},updated:Object(n.__)("Product attribute search results updated.","woo-gutenberg-products-block")};return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(B.a,{className:"woocommerce-product-attributes",list:p,isLoading:c,selected:b.map(function(t){var e=t.id;return Object(L.find)(p,{id:e})}).filter(Boolean),onChange:u,renderItem:this.renderItem,messages:g,isHierarchical:!0}),!!s&&Object(o.createElement)("div",{className:b.length<2?"screen-reader-text":""},Object(o.createElement)(w.SelectControl,{className:"woocommerce-product-attributes__operator",label:Object(n.__)("Display products matching","woo-gutenberg-products-block"),help:Object(n.__)("Pick at least two attributes to use this setting.","woo-gutenberg-products-block"),value:l,onChange:s,options:[{label:Object(n.__)("Any selected attributes","woo-gutenberg-products-block"),value:"any"},{label:Object(n.__)("All selected attributes","woo-gutenberg-products-block"),value:"all"}]})))}}]),e}(o.Component));I.propTypes={onChange:j.a.func.isRequired,onOperatorChange:j.a.func,operator:j.a.oneOf(["all","any"]),selected:j.a.array.isRequired},I.defaultProps={operator:"any"};var F=I,V=r(69),W=function(t){function e(){return s()(this,e),p()(this,m()(e).apply(this,arguments))}return _()(e,t),b()(e,[{key:"getInspectorControls",value:function(){var t=this.props.setAttributes,e=this.props.attributes,r=e.attributes,c=e.attrOperator,i=e.columns,a=e.contentVisibility,u=e.orderby,s=e.rows;return Object(o.createElement)(h.InspectorControls,{key:"inspector"},Object(o.createElement)(w.PanelBody,{title:Object(n.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(o.createElement)(k.a,{columns:i,rows:s,setAttributes:t})),Object(o.createElement)(w.PanelBody,{title:Object(n.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(o.createElement)(y.a,{settings:a,onChange:function(e){return t({contentVisibility:e})}})),Object(o.createElement)(w.PanelBody,{title:Object(n.__)("Filter by Product Attribute","woo-gutenberg-products-block"),initialOpen:!1},Object(o.createElement)(F,{selected:r,onChange:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(t){return{id:t.id,attr_slug:t.attr_slug}});t({attributes:e})},operator:c,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return t({attrOperator:e})}})),Object(o.createElement)(w.PanelBody,{title:Object(n.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(o.createElement)(V.a,{setAttributes:t,value:u})))}},{key:"renderEditMode",value:function(){var t=this.props,e=t.debouncedSpeak,r=t.setAttributes,c=this.props.attributes;return Object(o.createElement)(w.Placeholder,{icon:Object(o.createElement)(i.a,{icon:"custom-post-type"}),label:Object(n.__)("Products by Attribute","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-products-attribute"},Object(n.__)("Display a grid of products from your selected attributes.","woo-gutenberg-products-block"),Object(o.createElement)("div",{className:"wc-block-products-attribute__selection"},Object(o.createElement)(F,{selected:c.attributes,onChange:function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(t){return{id:t.id,attr_slug:t.attr_slug}});r({attributes:t})},operator:c.attrOperator,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({attrOperator:t})}}),Object(o.createElement)(w.Button,{isDefault:!0,onClick:function(){r({editMode:!1}),e(Object(n.__)("Showing Products by Attribute block preview.","woo-gutenberg-products-block"))}},Object(n.__)("Done","woo-gutenberg-products-block"))))}},{key:"render",value:function(){var t=this.props,e=t.attributes,r=t.name,c=t.setAttributes,i=e.editMode;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(h.BlockControls,null,Object(o.createElement)(w.Toolbar,{controls:[{icon:"edit",title:Object(n.__)("Edit"),onClick:function(){return c({editMode:!i})},isActive:i}]})),this.getInspectorControls(),i?this.renderEditMode():Object(o.createElement)(w.Disabled,null,Object(o.createElement)(h.ServerSideRender,{block:r,attributes:e})))}}]),e}(o.Component);W.propTypes={attributes:j.a.object.isRequired,name:j.a.string.isRequired,setAttributes:j.a.func.isRequired,debouncedSpeak:j.a.func.isRequired};var G=Object(w.withSpokenMessages)(W),H=r(42);Object(a.registerBlockType)("woocommerce/products-by-attribute",{title:Object(n.__)("Products by Attribute","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(i.a,{icon:"custom-post-type"}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(n.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(n.__)("Display a grid of products from your selected attributes.","woo-gutenberg-products-block"),supports:{align:["wide","full"]},attributes:{attributes:{type:"array",default:[]},attrOperator:{type:"string",default:"any"},columns:{type:"number",default:wc_product_block_data.default_columns},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},rows:{type:"number",default:wc_product_block_data.default_rows}},deprecated:[{attributes:{attributes:{type:"array",default:[]},attrOperator:{type:"string",default:"any"},columns:{type:"number",default:wc_product_block_data.default_columns},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},rows:{type:"number",default:wc_product_block_data.default_rows}},save:Object(H.a)("woocommerce/products-by-attribute")}],edit:function(t){return Object(o.createElement)(G,t)},save:function(){return null}})},65:function(t,e){!function(){t.exports=this.wp.hooks}()},67:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},68:function(t,e){!function(){t.exports=this.wp.date}()},69:function(t,e,r){"use strict";var o=r(0),n=r(1),c=r(3),i=r(5),a=r.n(i),u=function(t){var e=t.value,r=t.setAttributes;return Object(o.createElement)(c.SelectControl,{label:Object(n.__)("Order products by","woo-gutenberg-products-block"),value:e,options:[{label:Object(n.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(n.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(n.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(n.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(n.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(n.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(n.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(t){return r({orderby:t})}})};u.propTypes={setAttributes:a.a.func.isRequired,value:a.a.string.isRequired},e.a=u},76:function(t,e){!function(){t.exports=this.wp.dom}()},8:function(t,e){!function(){t.exports=this.moment}()},80:function(t,e){},81:function(t,e){},83:function(t,e){},84:function(t,e){},9:function(t,e){!function(){t.exports=this.React}()}});