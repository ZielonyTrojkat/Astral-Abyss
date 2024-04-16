Events.on(ContentInitEvent, e => {
     Vars.content.block("astral-abyss-azure-weed").attributes.set(Attribute.get("azure-moss"), 1);

     Vars.content.block("astral-abyss-moss-gatherer").attribute = Attribute.get("azure-moss");
});