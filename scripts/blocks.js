Events.on(ContentInitEvent, e => {
     Vars.content.block("radiatr-mod-d-dissonance-floor").attributes.set(Attribute.get("dissonance"), 1);

     Vars.content.block("radiatr-mod-d-dissonance-extractor").attribute = Attribute.get("dissonance");
});