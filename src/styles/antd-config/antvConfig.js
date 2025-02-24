import { Checkbox } from "ant-design-vue";
import { siderProps } from "ant-design-vue/es/layout/Sider";

export const themeTokens = {
  token: {
    fontFamily: "Nunito, serif",
    borderColor: "var(--clr-primary)",
    backgroundColor: "var(--clr-primary)",
  },

  components: {
    Button: {
      colorPrimary: "var(--clr-primary)",
      borderRadius: "10px",
    },
    Input: {
      borderRadius: "10px",
    },
    siderProps: {
      siderBg: "var(--clr-white)",
    },
  },
};
