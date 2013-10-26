(function () {
    "use strict";

    var fluid = require("infusion"),
        cookbook = fluid.registerNamespace("cookbook");

    fluid.defaults("cookbook.Egg", {
        gradeNames: ["autoInit", "fluid.littleComponent"],
        members: {
            size: "A"
        }
    });

    var egg = cookbook.Egg();
    console.log("How large are you:" + egg.size);
    egg.size = "AA";
    console.log("How large are you:" + egg.size);

    var anotherEgg = cookbook.Egg();
    console.log("How large are you:" + anotherEgg.size);
    anotherEgg.size = "AAA";
    console.log("How large are you:" + anotherEgg.size);

})();
