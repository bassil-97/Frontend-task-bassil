import NumbersIcon from "@mui/icons-material/Numbers";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

const navbarList = [
  {
    icon: NumbersIcon,
    desc: "CR number",
    secondDesc: "step 1",
    status: true,
    subList: [],
  },
  {
    icon: InfoOutlinedIcon,
    desc: "General info",
    secondDesc: "step 2",
    status: false,
    subList: [],
  },
  {
    icon: PermContactCalendarOutlinedIcon,
    desc: "Contacts",
    secondDesc: "step 3",
    status: false,
    subList: [
      {
        desc: "chat",
        badge: 2,
      },
      {
        desc: "reminder",
        badge: 0,
      },
    ],
  },
  {
    icon: Inventory2OutlinedIcon,
    desc: "Product details",
    secondDesc: "step 4",
    status: false,
    subList: [],
  },
  {
    icon: CurrencyExchangeOutlinedIcon,
    desc: "Financial details",
    secondDesc: "step 5",
    status: false,
    subList: [],
  },
  {
    icon: ArticleOutlinedIcon,
    desc: "Documents",
    secondDesc: "step 6",
    status: false,
    subList: [],
  },
  {
    icon: HistoryOutlinedIcon,
    desc: "History",
    secondDesc: "step 7",
    status: false,
    subList: [],
  },
  {
    icon: FactCheckOutlinedIcon,
    desc: "Preview and submit",
    secondDesc: "step 8",
    status: false,
    subList: [],
  },
];

export default navbarList;
