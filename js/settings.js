document.addEventListener("DOMContentLoaded", function()
{
    const settings=JSON.parse(localStorage.getItem("settings")) || {};
    if(settings.bg==="image" && settings.bgimg)
        document.body.style.backgroundImage=`url(${settings.bgimg || "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.YbbxxABEI4rJ5RkX4jrc6AHaEJ%3Fpid%3DApi&f=1&ipt=57ee2e16f7e4ad4b771b8f4503739a117dd6fd98b4ff81510d3d4009c3889301&ipo=images"})`;
    else if(settings.bg==="color")
    {
        document.body.style.backgroundColor=settings.bgcolor;
        document.body.style.backgroundImage="none";
        const bgElements=document.querySelectorAll("p, span, td, th, li, a, h1, h2, h3, h4, h5, h6");
        bgElements.forEach(bgElement=>
        {
            bgElement.style.backgroundColor=settings.bgcolor;
        });
    }
    const header=document.getElementsByTagName("header")[0];
    if(header)
        header.style.backgroundColor=settings.hfcolor || "white";
    const footer=document.getElementsByTagName("footer")[0];
    if(footer)
        footer.style.backgroundColor=settings.hfcolor || "white";
    document.body.style.color=settings.txtcolor || "black";
    const textElements = document.querySelectorAll("p, span, td, th, li, a, h1, h2, h3, h4, h5, h6");
    textElements.forEach(tag => {
        tag.style.color = settings.txtcolor || "black";
    });
    const hoverColor=settings.hovercolor || "gold";
    const hoverElements = document.querySelectorAll("a, .nav-2nd-drop, .nav-2nd-dropdown li, .profile-dropdown li");
    hoverElements.forEach(tag => {
        tag.addEventListener("mouseenter", () => tag.style.backgroundColor = hoverColor);
        tag.addEventListener("mouseleave", () => tag.style.backgroundColor = ""); // reset to default
    });
    const dropdowns = document.querySelectorAll(".nav-dropdown, .nav-2nd-dropdown, .profile-dropdown");
    dropdowns.forEach(dropdown => {
        dropdown.style.color = settings.txtcolor || "black";
        dropdown.style.backgroundColor=settings.dropdowncolor||"white";
    });
    document.body.style.fontFamily=settings.style || "Arial, Helvetica, sans-serif";
    const borderElements=document.querySelectorAll("p, header, .devs-photo, .offerings, .heading-2, .nav-dropdown, .profile-dropdown, .nav-2nd-dropdown, footer, .container");
    borderElements.forEach(element=>
    {
        element.style.borderColor=settings.bordercolor;
    });
    const shadowElements=document.querySelectorAll(".heading, .devs-photo, .offerings, .heading-2, .heading-4, .courses th, .courses td");
    if(settings.boxshadow)
        shadowElements.forEach(element=>
        {
            element.style.boxShadow=settings.boxshadow;
        });
});