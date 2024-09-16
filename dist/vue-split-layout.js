(function(d,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],s):(d=typeof globalThis<"u"?globalThis:d||self,s(d.VueSplitLayout={},d.Vue))})(this,function(d,s){"use strict";var L=Object.defineProperty;var A=(d,s,p)=>s in d?L(d,s,{enumerable:!0,configurable:!0,writable:!0,value:p}):d[s]=p;var w=(d,s,p)=>A(d,typeof s!="symbol"?s+"":s,p);const p=(t,i)=>{const n=t.__vccOpts||t;for(const[r,e]of i)n[r]=e;return n},$={name:"Split",props:{resizeable:{type:Boolean,default:!1},dir:{type:String,default:"horizontal"},split:{type:String,default:"50%"}},data(){return{state:{resizing:!1,split:this.split}}},computed:{splitClass(){return["split",this.dir,this.state.resizing?"resizing":"",this.resizeable?"resizeable":""]}},methods:{startResize(t){if(!this.resizeable||t.button!==0)return;t.preventDefault(),this.state.resizing=!0;const i=r=>{const e=this.dir==="horizontal",o=(e?this.$el.children[1].clientWidth:this.$el.children[1].clientHeight)/2,l=this.$el.getBoundingClientRect(),c=e?(r.clientX-l.left-o)/this.$el.clientWidth*100:(r.clientY-l.top-o)/this.$el.clientHeight*100;this.state.split=c+"%"},n=()=>{this.state.resizing=!1,document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",i),document.addEventListener("mouseup",n)}}},v={class:"content"};function E(t,i,n,r,e,o){return s.openBlock(),s.createElementBlock("div",{class:s.normalizeClass(o.splitClass)},[s.createElementVNode("div",{class:"content",style:s.normalizeStyle({"flex-basis":e.state.split})},[s.renderSlot(t.$slots,"first")],4),s.createElementVNode("div",{class:"splitter",onMousedown:i[0]||(i[0]=(...l)=>o.startResize&&o.startResize(...l))},null,32),s.createElementVNode("div",v,[s.renderSlot(t.$slots,"second")])],2)}const u=p($,[["render",E]]),f=class f{constructor(i){this.tree=i||[]}push(i){return i.id===void 0&&(i.id=f.gid++),this.tree.push(i),i}findById(i){return this.tree.find(n=>n.id===i)}childrenOf(i){return this.tree.filter(n=>n.parent===i)}attachChild(i,n,r,e){r.id===void 0&&(r.id=f.gid++),e=e||33;const o=this.tree.indexOf(i),l={id:f.gid++,type:"split",parent:i.parent,dir:n%2===0?"vertical":"horizontal"};return i.parent=l,r.parent=l,this.tree[o]=l,n===0||n===3?(l.split=e+"%",this.tree.push(r,i)):(l.split=100-e+"%",this.tree.push(i,r)),r}};w(f,"gid",0);let h=f;h.from=function(t){return new h(t)};const S={name:"Layout",props:{edit:{type:Boolean,default:!0},resize:{type:Boolean,default:!0},splits:{type:[String,Number,Object],default:()=>({})}},data(){return{nodes:this.calcSplits(),drag:null,savedNodes:null}},computed:{layoutClass(){return{"layout-container":!0,"edit-mode":this.edit,"drag-mode":!!this.drag}}},watch:{splits(){this.nodes=this.calcSplits()}},beforeUpdate(){if(!this.$refs.container)return;const t=this.$refs.container.querySelectorAll("[target-view]");Array.from(t).forEach(i=>{const n=this.$refs.container.querySelector(`[src-view=${i.getAttribute("target-view")}]`);n&&n.children[0]&&n.appendChild(i.children[0])})},methods:{calcSplits(){const t=[],i=h.from(t),n=r=>{if(r instanceof Object){const e=i.push({type:"split",dir:r.dir,split:r.split});return n(r.first).parent=e,n(r.second).parent=e,e}return i.push({type:"view",viewId:r})};return n(this.splits),t},childrenOf(t){return h.from(this.nodes).childrenOf(t)},renderNode(t){return t.type==="split"?u:"div"},onSplitResize(t,i,n){const r=i.props["node-id"],e=h.from(this.nodes).findById(r);e.split=n},previewPane(t,i,n){if(t===-1){this.$refs.preview.style.opacity=0;return}if(!i)return-1;n=n||33;const r=n/100,e=i.getBoundingClientRect(),o={left:e.left,top:e.top,width:e.width,height:e.height};t===1?o.left+=o.width-o.width*r:t===2&&(o.top+=o.height-o.height*r),t%2===0?o.height*=r:o.width*=r,this.$refs.preview.style.opacity=1;for(const l in o)this.$refs.preview.style[l]=`${o[l]}px`},onViewDragStart(t){if(t.button!==0)return;const i=t.target.hasAttribute("node-id"),n=t.target.hasAttribute("pane-drag");if(!i&&!n)return;let r=t.target;if(!i){let a=r;for(;a&&a.matches&&!a.hasAttribute("node-id");)a=a.parentNode;if(!a||!a.matches)return;r=a}const e=parseInt(r.getAttribute("node-id"),10),o=this.nodes.find(a=>a.id===e);if(!o)return;t.preventDefault();const l=this.$refs.container.getBoundingClientRect(),c=t.target.getBoundingClientRect();this.drag={node:o,offset:{x:t.clientX-c.left,y:t.clientY-c.top}},this.savedNodes=structuredClone(this.nodes),h.from(this.nodes).removeChild(o),this.$refs.drag.style.top=`${c.y-l.top}px`,this.$refs.drag.style.left=`${c.x-l.left}px`,this.$refs.drag.style.width=`${c.width}px`,this.$refs.drag.style.height=`${c.height}px`,document.addEventListener("mousemove",this.onViewDrag),document.addEventListener("mouseup",this.onViewDrop)},onViewDrag(t){if(t.button!==0)return;const i=this.$refs.container.getBoundingClientRect(),n={x:t.clientX-i.left,y:t.clientY-i.top};this.$refs.drag.style.left=`${n.x-this.drag.offset.x}px`,this.$refs.drag.style.top=`${n.y-this.drag.offset.y}px`,this.$refs.drag.style.pointerEvents="none";const r=document.elementFromPoint(t.clientX,t.clientY);this.$refs.drag.style.pointerEvents=null;let e=r;for(;e&&!e.matches(".view");)e=e.parentNode;if(!e||!e.matches){this.previewPane(-1);return}const o=this.checkAttach(e,t);o!==-1&&(this.drag.over={viewDom:e,attach:o}),this.previewPane(o,e)},onViewDrop(t){if(t.button!==0)return;if(document.removeEventListener("mousemove",this.onViewDrag),document.removeEventListener("mouseup",this.onViewDrop),this.previewPane(-1),!this.drag.over){this.drag=null,this.nodes=this.savedNodes;return}const{viewDom:i,attach:n}=this.drag.over,r=parseInt(i.getAttribute("node-id"),10),e=h.from(this.nodes),o=e.findById(r);e.attachChild(o,n,this.drag.node),this.drag=null},checkAttach(t,i,n=33){const r=n/100,e=t.getBoundingClientRect(),o=e.width*r,l=e.height*r,c={x:i.clientX-e.left,y:i.clientY-e.top},a=[c.y-l,e.width-o-c.x,e.height-l-c.y,c.x-o];let g=0,m=-1;return a.forEach((y,I)=>{y<g&&(g=y,m=I)}),m}}},_={class:"preview",ref:"preview"},z=["target-view"],B={style:{display:"none"}};function b(t,i,n,r,e,o){return s.openBlock(),s.createElementBlock("div",{class:s.normalizeClass(o.layoutClass),ref:"container"},[s.createElementVNode("div",{class:s.normalizeClass(["views",{dragging:!!e.drag}]),ref:"views"},[(s.openBlock(!0),s.createElementBlock(s.Fragment,null,s.renderList(o.childrenOf(e.nodes[0]),l=>(s.openBlock(),s.createBlock(s.resolveDynamicComponent(o.renderNode(l)),{key:l.id}))),128))],2),s.createElementVNode("div",_,null,512),s.createElementVNode("div",{class:s.normalizeClass({drag:!0,dragging:!!e.drag}),ref:"drag"},[e.drag?(s.openBlock(),s.createElementBlock("div",{key:0,class:"view","target-view":"view-"+e.drag.node.viewId},null,8,z)):s.createCommentVNode("",!0)],2),s.createElementVNode("div",B,[s.renderSlot(t.$slots,"default")])],2)}const C=p(S,[["render",b]]),k={name:"Pane",props:{title:{type:String,default:""}}},V={class:"pane"},N={class:"header"},x={class:"content"};function R(t,i,n,r,e,o){return s.openBlock(),s.createElementBlock("div",V,[s.createElementVNode("div",N,s.toDisplayString(n.title),1),s.createElementVNode("div",x,[s.renderSlot(t.$slots,"default")])])}const D=p(k,[["render",R]]);d.Layout=C,d.Pane=D,d.Split=u,d.Tree=h,Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=vue-split-layout.js.map
