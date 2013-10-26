This is an example of the most basic fluid component.  Here we create a 
component in a namespace we register called "cookbook". A fluid defaults
block registeres a component with the system that can be instantiated later.

Fluid operates largely on the premise that all action and code takes place
in namespaced global functions. So, our components name is "cookbook.Egg", the
framework will create a global function according to this name which is what
we use to fetch instances of the component.

The second argument to defaults is a block of options for the component. It's 
important to note that most of this block can be pure JSON, allowing
you to build powerful metaprogramming code in the future that can automatically
create new types of components on the fly and allow them to be authored in
editors easily. 

If you've ever programmed in C++, you can almost think of the component options
as a header file, and the global namespaced functions that implement them as 
cpp code. We impose less structural rules than that though of course!

Let's look at the two members we have in the options block. The first is 
gradeNames. If you come from an object oriented programming background, you 
can think of these loosely as interface types, or slots in other idioms.
Including various gradeNames will give your component various functionality from
other predefined components. Also, when you specify a component using 
fluid.defaults, that becomes a grade name that other components can inherit
from. We'll see in future examples how this allows incredibly powerful 
customization and runtime polymorphism that is often very difficult with 
typical single and multiple class inheritance systems.

"autoInit" and "fluid.littleComponent" are very base compoments that you will
typically use for the simplest of components. Together you can think of them
like 'object' in Python or java.lang.Object in Java.

Anything that you include in members, such as variables or functions, will be
added to the new component unchanged. In the next examples, we'll see how to
use facilities for adding component members with more dynamism.
