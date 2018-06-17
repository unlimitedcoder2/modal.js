//IMPORT ANIMATION
var anim = document.createElement('link');
anim.setAttribute('rel', 'stylesheet');
anim.setAttribute('type', 'text/css');
anim.setAttribute('href', "https://cdn.discordapp.com/attachments/444315681161347082/457740647521058818/anim.css");
document.head.appendChild(anim);

console.log("Running Modal.JS")
history.pushState("", document.title, window.location.pathname + window.location.search);
var container;
var modal = {
    name:"default",
    text:"Uhm.. Here's the default message. WHAT DO YOU EXPECT?!</br></br><b>Docs</b> <a href='https://modal.js.org' target='_blank'>https://modal.js.org</a>",
    title:"Modal.JS Default Modal",
    bgColor:"#FFF",
    headerColor:"#4DE1FF",
    textColor:"#000",
    titleColor:"#FFF",
    exitColor:"#FFF",
    opacity:0.5,
    embed:undefined,
    radius:"10px",
    font:"https://fonts.googleapis.com/css?family=Roboto",
    conf: {
        exitBtn:true,
        hash:true,
        resize:false,
        centerTitle:false,
        centerText:false,
        textSelection:false,
        exitOuter:true,
    },
    destroy: function() {
        if(container === undefined) return console.error("No modal was found.")
        mreset()
        container.parentNode.removeChild(container)
        if(modal.conf.hash === true) {
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }
    },
    apply: function(){
        var body = document.body;
        if(modal.conf.hash === true) {
            document.location.hash = "modal?"+modal.name
        }
        
        //FONTS
        var font = document.createElement('link');
        font.setAttribute('rel', 'stylesheet');
        font.setAttribute('type', 'text/css');
        font.setAttribute('href', modal.font);
        document.head.appendChild(font);
        
        //MODAL CONTAINER
        container = document.createElement("div");
        container.setAttribute("class", "modal")
        container.setAttribute("id", "modal-container");
        body.appendChild(container);
        body.insertBefore(container, body.firstChild);
        
        var wrapper = document.createElement("div");
        wrapper.setAttribute("id", "modal-wrapper")
        container.appendChild(wrapper);
        
        var closeBtn = document.createElement("span");
        if(modal.conf.exitBtn === true) { 
        closeBtn.setAttribute("class", "closeBtn");
        closeBtn.innerHTML = "&times;";
        wrapper.appendChild(closeBtn);
        };
        
        var head = document.createElement("h2");
        head.innerHTML = modal.title;
        wrapper.appendChild(head);
        
        var para = document.createElement("p");
        para.innerHTML = modal.text;
        wrapper.appendChild(para);
        
        if(modal.embed != undefined) {
            var embed = document.createElement("div");
            embed.innerHTML = modal.embed;
            wrapper.appendChild(embed);
        }
        //STYLES
        var modalFont = modal.font.substring(modal.font.indexOf("=") + 1);
        console.log(modalFont)
        container.style.fontFamily = modalFont+", Sans Serif";
        container.style.position = "fixed";
        container.style.top = "0";
        container.style.left = "0";
        container.style.width = "100%";
        container.style.height = "100%";
        container.style.overflow = "auto";
        container.style.background = "rgba(0,0,0,"+modal.opacity+")"
        if(modal.conf.textSelection === false) {
            container.style.userSelect = "none";
        }
        
        wrapper.style.backgroundColor = modal.bgColor;
        wrapper.style.margin = "10% auto";
        wrapper.style.maxWidth = "70%";
        wrapper.style.width = "40%";
        wrapper.style.boxShadow = "0 5px 8px 0 rgba(0,0,0,0.2),0 7px 20px 0 rgba(0,0,0,0.2)"
        wrapper.style.border = "0 solid"
        wrapper.style.borderRadius = modal.radius;
        if(modal.conf.resize === true) {
            wrapper.style.resize = "both";
            wrapper.style.overflow = "auto";
        }
        
        head.style.background = modal.headerColor;
        head.style.padding = "20px";
        head.style.margin = "0";
        head.style.color = modal.titleColor;
        head.style.border = "0 solid"
        head.style.borderTopLeftRadius = modal.radius;
        head.style.borderTopRightRadius = modal.radius;
        head.style.color = modal.titleColor
        if(modal.conf.centerTitle === true) {
            head.style.textAlign = "center";
        }
        
        para.style.padding = "10px 20px 20px 20px";
        para.style.color = modal.textColor
        if(modal.conf.centerText === true) {
            para.style.textAlign = "center";
        }
        
        closeBtn.style.color = modal.exitColor;
        closeBtn.style.float = "right";
        closeBtn.style.fontSize = "30px";
        closeBtn.style.cursor = "pointer";
        closeBtn.style.margin = "10px 20px";
        
        //EXIT
        closeBtn.addEventListener("click", function(){
            mreset()
            container.parentNode.removeChild(container);
        if(modal.conf.hash === true) {
            history.pushState("", document.title, window.location.pathname + window.location.search);
            container = undefined;
        }
        });
        if(modal.conf.exitOuter === true) {
        window.addEventListener("click", function(e){
            if(e.target == container) {
            mreset()
            container.parentNode.removeChild(container);
        if(modal.conf.hash === true) {
            history.pushState("", document.title, window.location.pathname + window.location.search);
            container = undefined;
            }
        }
        });
    }
    }
}

function mreset() {
    modal.name = "default";
    modal.text = "Uhm.. Here's the default message. WHAT DO YOU EXPECT?!</br></br><b>Docs</b> <a href='https://modal.js.org' target='_blank'>https://modal.js.org</a>";
    modal.title = "Modal.JS Default Modal";
    modal.bgColor = "#FFF";
    modal.headerColor = "#4DE1FF";
    modal.textColor = "#000";
    modal.titleColor = "#FFF";
    modal.exitColor = "#FFF";
    modal.opacity = 0.5;
    modal.font = "https://fonts.googleapis.com/css?family=Roboto";
    modal.conf.centerText = false;
    modal.conf.centerTitle = false;
    modal.conf.hash = true;
    modal.conf.resize = false;
    modal.conf.exitBtn = true;
    modal.conf.textSelection = false;
    modal.conf.exitOuter = true;
    modal.embed = undefined;
    modal.radius = "10px";
}