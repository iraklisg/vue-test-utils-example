import { mount } from "vue-test-utils";
import expect from "expect";
import Foo from "../src/Foo.vue";

describe("Foo", () => {
  let wrapper;
  beforeEach(() => {
    // But if we mount the component with options (propsData), instead of using
    // the setProps() method, the test passes !!!
    // wrapper = mount(Foo, {
    //   propsData: {
    //     dataFoo: "foo"
    //   }
    // });

    wrapper = mount(Foo);
    wrapper.setProps({
      dataFoo: "foo"
    });

    // But if we mount the component with options (propsData), instead of using
    // the setProps() method, the test passes !!!
    // wrapper = mount(Foo, {
    //   propsData: {
    //     dataFoo: "foo"
    //   }
    // });
  });

  it("has its props set", () => {
    expect(wrapper.vm.dataFoo).toBe("foo");
  });

  it("sets the `foo` data property to the value of the `dataFoo` prop", () => {
    expect(wrapper.vm.foo).toBe("foo");
  });
});
