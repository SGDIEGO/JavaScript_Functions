// Beginner exercises
const SimpleIIFE = (() => {
  let var1 = "var1 global";
  let var2 = "var2 global";

  function localVariables() {
    let var1 = "var1 local";
    let var2 = "var2 local";
    console.log(var1);
    console.log(var2);
  }

  return () => {
    localVariables();
    console.log(var1);
    console.log(var2);
  };
})();

SimpleIIFE();

const BasicCounterwithIIFE = (() => {
  let count = 0;
  const increment = () => {
    count++;
  };
  const getCount = () => {
    return count;
  };

  return { increment, getCount };
})();

const counter = BasicCounterwithIIFE;
console.log(counter.getCount());
counter.increment();
counter.increment();
console.log(counter.getCount());

const SimpleConfigurationObject = (() => {
  let cnf = { color: "blue", fontSize: "14px" };

  const getConfig = () => {
    return cnf;
  };
  return { getConfig };
})();

const config = SimpleConfigurationObject;
console.log(config.getConfig());

// Advanced exercises

const PrivateVariablewithIIFE = (() => {
  let variable = 0;
  const getVar = () => {
    return variable;
  };
  const setVar = (val) => {
    variable = val;
  };
  return { getVar, setVar };
})();

const m = PrivateVariablewithIIFE;
console.log(m.getVar());
m.setVar(3);
console.log(m.getVar());

const SingletonPatternwithIIFE = (() => {
  const getInstance = () => {
    return this;
  };
  return { getInstance };
})();

const obj1 = SingletonPatternwithIIFE.getInstance();
const obj2 = SingletonPatternwithIIFE.getInstance();
console.log(obj1 === obj2); // Output: true

const ModulePattern = (() => {
  let privateVariable = 2;

  const privateMethod = (v) => {
    privateVariable = v + 2;
    console.log(privateVariable);
  };

  const publicMethod = (val) => {
    privateMethod(val);
  };

  return {
    publicMethod,
  };
})();

const myModule = ModulePattern;
myModule.publicMethod(3);

const LazyInitialization = (() => {
  let variable = undefined;

  return (val) => {
    if (variable === undefined) {
      console.log("Initializing...");
      variable = val;
    } else {
      console.log("Already initialized");
    }
  };
})();

LazyInitialization(3);
LazyInitialization(4);

const ConfigurationModule = (() => {
  let cnf = {
    theme: "",
    color: "",
    size: 0,
  };

  const set = (key, val) => {
    cnf[key] = val;
  };
  const get = (key) => {
    return cnf[key];
  };

  return {
    set, get
  }
})();

const conf = ConfigurationModule;
conf.set('theme', 'dark');
console.log(conf.get('theme')); // Output: dark