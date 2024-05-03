Events.on(ContentInitEvent, e => {
     Vars.content.block("astral-abyss-azure-weed").attributes.set(Attribute.get("azure-moss"), 1);
     Vars.content.block("astral-abyss-moss-gatherer").attribute = Attribute.get("azure-moss");

     Vars.content.block("astral-abyss-crimson-stone").attributes.set(Attribute.get("crimson-rock"), 1);
     Vars.content.block("astral-abyss-shock-drill").attribute = Attribute.get("crimson-rock");
});