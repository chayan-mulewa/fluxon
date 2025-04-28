/** @type {import('tailwindcss').Config} */

// import all the tailwindcss plugins
import theme from "./src/plugins/tailwind/theme";
import card from "./src/plugins/tailwind/card";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      base: {
        colors: {
          gray: {
            light: {
              100: "#F9F9F9",
              200: "#F1F1F4",
              300: "#DBDFE9",
              400: "#C4CADA",
              500: "#99A1B7",
              600: "#78829D",
              700: "#4B5675",
              800: "#252F4A",
              900: "#071437"
            },
            dark: {
              100: "#1B1C22",
              200: "#26272F",
              300: "#363843",
              400: "#464852",
              500: "#636674",
              600: "#808290",
              700: "#9A9CAE",
              800: "#B5B7C8",
              900: "#F5F5F5"
            }
          },
          contextual: {
            light: {
              brand: {
                default: "#FF6F1E",
                active: "#F15700",
                light: "#FFF5EF",
                clarity: "rgba(255, 111, 30, 0.20)",
                inverse: "#ffffff"
              },
              primary: {
                default: "#1B84FF",
                active: "#056EE9",
                light: "#EFF6FF",
                clarity: "rgba(27, 132, 255, 0.20)",
                inverse: "#ffffff"
              },
              success: {
                default: "#17C653",
                active: "#04B440",
                light: "#EAFFF1",
                clarity: "rgba(23, 198, 83, 0.20)",
                inverse: "#ffffff"
              },
              info: {
                default: "#7239EA",
                active: "#5014D0",
                light: "#F8F5FF",
                clarity: "rgba(114, 57, 234, 0.20)",
                inverse: "#ffffff"
              },
              danger: {
                default: "#F8285A",
                active: "#D81A48",
                light: "#FFEEF3",
                clarity: "rgba(248, 40, 90, 0.20)",
                inverse: "#ffffff"
              },
              warning: {
                default: "#F6B100",
                active: "#DFA000",
                light: "#FFF8DD",
                clarity: "rgba(246, 177, 0, 0.20)",
                inverse: "#ffffff"
              },
              dark: {
                default: "#1E2129",
                active: "#111318",
                light: "#F9F9F9",
                clarity: "rgba(30, 33, 41, 0.20)",
                inverse: "#ffffff"
              },
              light: {
                default: "#ffffff",
                active: "#FCFCFC",
                light: "#ffffff",
                clarity: "rgba(255, 255, 255, 0.20)",
                inverse: "#4B5675"
              },
              secondary: {
                default: "#F9F9F9",
                active: "#F9F9F9",
                light: "#F9F9F9",
                clarity: "rgba(249, 249, 249, 0.20)",
                inverse: "#4B5675"
              }
            },
            dark: {
              brand: {
                default: "#D74E00",
                active: "#F35700",
                light: "#272320",
                clarity: "rgba(215, 78, 0, 0.20)",
                inverse: "#ffffff"
              },
              primary: {
                default: "#006AE6",
                active: "#107EFF",
                light: "#172331",
                clarity: "rgba(0, 106, 230, 0.20)",
                inverse: "#ffffff"
              },
              success: {
                default: "#00A261",
                active: "#01BF73",
                light: "#1F2623",
                clarity: "rgba(0, 162, 97, 0.20);",
                inverse: "#ffffff"
              },
              info: {
                default: "#883FFF",
                active: "#9E63FF",
                light: "#272134",
                clarity: "rgba(136, 63, 255, 0.20)",
                inverse: "#ffffff"
              },
              danger: {
                default: "#E42855",
                active: "#FF3767",
                light: "#302024",
                clarity: "rgba(228, 40, 85, 0.20)",
                inverse: "#ffffff"
              },
              warning: {
                default: "#C59A00",
                active: "#D9AA00",
                light: "#242320",
                clarity: "rgba(197, 154, 0, 0.20)",
                inverse: "#ffffff"
              },
              dark: {
                default: "#272A34",
                active: "#2D2F39",
                light: "#1E2027",
                clarity: "rgba(39, 42, 52, 0.20)",
                inverse: "#ffffff"
              },
              light: {
                default: "#1F212A",
                active: "#1F212A",
                light: "#1F212A",
                clarity: "rgba(31, 33, 42, 0.20)",
                inverse: "#9A9CAE"
              },
              secondary: {
                default: "#363843",
                active: "#464852",
                light: "#363843",
                clarity: "rgba(54, 56, 67, 0.20)",
                inverse: "#9A9CAE"
              }
            }
          }
        },
        boxShadows: {
          light: {
            default: "0px 4px 12px 0px rgba(0, 0, 0, 0.09)",
            light: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
            primary: "0px 4px 12px 0px rgba(40, 132, 239, 0.35)",
            success: "0px 4px 12px 0px rgba(53, 189, 100, 0.35)",
            danger: "0px 4px 12px 0px rgba(241, 65, 108, 0.35)",
            info: "0px 4px 12px 0px rgba(114, 57, 234, 0.35)",
            warning: "0px 4px 12px 0px rgba(246, 192, 0, 0.35)",
            dark: "0px 4px 12px 0px rgba(37, 47, 74, 0.35)"
          },
          dark: {
            default: "none",
            light: "none",
            primary: "none",
            success: "none",
            danger: "none",
            info: "none",
            warning: "none",
            dark: "none"
          }
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        gray: {
          100: "var(--tw-gray-100)",
          200: "var(--tw-gray-200)",
          300: "var(--tw-gray-300)",
          400: "var(--tw-gray-400)",
          500: "var(--tw-gray-500)",
          600: "var(--tw-gray-600)",
          700: "var(--tw-gray-700)",
          800: "var(--tw-gray-800)",
          900: "var(--tw-gray-900)"
        },
        coal: {
          100: "#15171C",
          200: "#13141A",
          300: "#111217",
          400: "#0F1014",
          500: "#0D0E12",
          600: "#0B0C10",
          700: "#090A0E",
          800: "#07080C",
          900: "#05060A"
        },
        primary: {
          DEFAULT: "var(--tw-primary)",
          active: "var(--tw-primary-active)",
          light: "var(--tw-primary-light)",
          clarity: "var(--tw-primary-clarity)",
          inverse: "var(--tw-primary-inverse)",
          foreground: "hsl(var(--primary-foreground))"
        },
        success: {
          DEFAULT: "var(--tw-success)",
          active: "var(--tw-success-active)",
          light: "var(--tw-success-light)",
          clarity: "var(--tw-success-clarity)",
          inverse: "var(--tw-success-inverse)"
        },
        warning: {
          DEFAULT: "var(--tw-warning)",
          active: "var(--tw-warning-active)",
          light: "var(--tw-warning-light)",
          clarity: "var(--tw-warning-clarity)",
          inverse: "var(--tw-warning-inverse)"
        },
        danger: {
          DEFAULT: "var(--tw-danger)",
          active: "var(--tw-danger-active)",
          light: "var(--tw-danger-light)",
          clarity: "var(--tw-danger-clarity)",
          inverse: "var(--tw-danger-inverse)"
        },
        info: {
          DEFAULT: "var(--tw-info)",
          active: "var(--tw-info-active)",
          light: "var(--tw-info-light)",
          clarity: "var(--tw-info-clarity)",
          inverse: "var(--tw-info-inverse)"
        },
        dark: {
          DEFAULT: "var(--tw-dark)",
          active: "var(--tw-dark-active)",
          light: "var(--tw-dark-light)",
          clarity: "var(--tw-dark-clarity)",
          inverse: "var(--tw-dark-inverse)"
        },
        secondary: {
          DEFAULT: "var(--tw-secondary)",
          active: "var(--tw-secondary-active)",
          light: "var(--tw-secondary-light)",
          clarity: "var(--tw-secondary-clarity)",
          inverse: "var(--tw-secondary-inverse)",
          foreground: "hsl(var(--secondary-foreground))"
        },
        light: {
          DEFAULT: "var(--tw-light)",
          active: "var(--tw-light-active)",
          light: "var(--tw-light-light)",
          clarity: "var(--tw-light-clarity)",
          inverse: "var(--tw-light-inverse)"
        },
        brand: {
          DEFAULT: "var(--tw-brand)",
          active: "var(--tw-brand-active)",
          light: "var(--tw-brand-light)",
          clarity: "var(--tw-brand-clarity)",
          inverse: "var(--tw-brand-inverse)"
        }
      },
      boxShadow: {
        card: "var(--tw-card-box-shadow)"
      }
    },
    custom: ({ theme }) => ({
      components: {
        common: {
          backgrounds: {
            light: {
              card: "white"
            },
            dark: {
              card: theme("colors.coal")["300"]
            }
          },
          borders: {
            light: {
              card: "1px solid var(--tw-gray-200)"
            },
            dark: {
              card: `1px solid ${theme("base.colors.gray.dark")["100"]}`
            }
          },
          boxShadows: {
            light: {
              card: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)"
            },
            dark: {
              card: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)"
            }
          },
          borderRadius: {
            card: theme("borderRadius.xl")
          }
        },
        card: {
          px: theme("spacing")["7"],
          py: {
            header: theme("spacing.3"),
            body: theme("spacing.5"),
            footer: theme("spacing.3"),
            group: theme("spacing.3")
          },
          grid: {
            px: theme("spacing.5")
          }
        }
      },
      layouts: {
        demo1: {
          sidebar: {
            width: {
              desktop: "280px",
              desktopCollapse: "80px",
              mobile: "280px"
            }
          },
          header: {
            height: {
              desktop: "70px",
              mobile: "60px"
            }
          }
        }
      }
    })
  },
  plugins: [theme, card]
};
