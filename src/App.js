import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

import SoftBox from "./components/SoftBox";

import Sidenav from "./features/Sidenav";
import Configurator from "./features/Configurator";

import theme from "./assets/theme";

import routes from "./pages";

import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "./context";

import brandImg from "./assets/images/RISK-LOGO.svg";

export const brand = () => {
  return (

<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 1098.000000 136.000000"
style={{marginLeft: "auto", marginRight: "auto"}}
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,136.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M3735 1221 c-87 -22 -181 -104 -203 -179 -32 -107 4 -221 88 -277 25
-17 86 -43 135 -59 161 -51 192 -78 182 -163 -13 -121 -159 -148 -308 -57 -33
20 -64 32 -73 28 -8 -3 -29 -28 -45 -55 l-30 -48 32 -25 c92 -70 228 -105 336
-86 84 15 130 39 179 95 98 112 97 276 -3 364 -41 36 -76 52 -204 96 -104 36
-141 68 -141 122 0 72 54 113 149 113 35 0 65 -8 106 -30 31 -16 65 -30 75
-30 20 0 74 86 66 106 -8 21 -95 66 -155 80 -60 15 -138 16 -186 5z"/>
<path d="M4402 1211 c-69 -24 -121 -66 -154 -127 -23 -41 -28 -61 -28 -122 0
-143 60 -205 263 -266 55 -17 99 -37 120 -56 28 -25 32 -34 31 -77 -1 -89 -50
-128 -159 -127 -59 0 -69 4 -174 63 -42 25 -57 19 -92 -37 l-29 -46 21 -22
c58 -62 216 -111 321 -99 68 8 162 51 200 91 95 101 98 286 6 371 -28 26 -125
71 -222 103 -89 29 -130 65 -130 113 0 110 118 151 252 87 35 -17 70 -30 78
-30 13 0 74 83 74 101 0 4 -21 21 -48 37 -92 60 -230 78 -330 43z"/>
<path d="M5855 1221 c-87 -22 -181 -104 -203 -179 -32 -107 4 -221 88 -277 25
-17 86 -43 135 -59 161 -51 192 -78 182 -163 -13 -121 -160 -148 -307 -57 -34
21 -63 32 -73 28 -9 -3 -30 -28 -46 -55 l-30 -48 32 -25 c120 -92 314 -118
431 -59 92 46 156 152 156 259 0 136 -60 194 -279 270 -100 34 -141 68 -141
116 1 109 129 154 255 88 31 -16 65 -30 75 -30 26 0 76 88 63 109 -38 61 -231
108 -338 82z"/>
<path d="M2750 774 c-96 -246 -176 -453 -178 -460 -3 -11 13 -14 67 -14 92 0
109 15 151 138 l33 92 189 0 c186 0 189 0 198 -23 5 -12 23 -59 40 -105 19
-48 40 -86 51 -92 11 -6 50 -10 89 -8 l69 3 -179 455 -179 455 -88 3 -88 2
-175 -446z m267 -122 c-77 -1 -141 -1 -143 1 -2 2 29 92 68 200 l71 197 72
-197 72 -198 -140 -3z"/>
<path d="M4950 760 l0 -460 285 0 285 0 0 70 0 70 -200 0 -200 0 0 130 0 130
160 0 160 0 0 65 0 65 -160 0 -160 0 0 125 0 125 200 0 200 0 0 70 0 70 -285
0 -285 0 0 -460z"/>
<path d="M6290 1150 l0 -70 135 0 135 0 2 -387 3 -388 83 -3 82 -3 0 391 0
390 140 0 140 0 0 70 0 70 -360 0 -360 0 0 -70z"/>
<path d="M7130 760 l0 -460 75 0 75 0 2 330 3 329 139 -259 c77 -143 146 -266
154 -272 20 -17 89 -16 106 2 8 8 74 128 146 265 73 138 135 253 139 257 3 4
6 -140 6 -320 l0 -327 73 -3 72 -3 0 461 0 460 -78 0 c-63 0 -82 -4 -94 -17
-20 -24 -308 -568 -308 -582 0 -27 -18 -6 -48 55 -64 130 -284 529 -295 536
-7 4 -47 8 -89 8 l-78 0 0 -460z"/>
<path d="M8330 760 l0 -460 288 2 287 3 3 67 3 68 -206 0 -205 0 0 130 0 130
160 0 160 0 0 65 0 65 -160 0 -160 0 0 125 0 125 203 2 202 3 3 68 3 67 -291
0 -290 0 0 -460z"/>
<path d="M9060 760 l0 -460 75 0 75 0 2 315 3 315 239 -306 c132 -168 248
-310 257 -315 10 -5 40 -9 68 -9 l51 0 0 460 0 460 -75 0 -75 0 -2 -315 -3
-314 -220 281 c-298 382 -265 348 -336 348 l-59 0 0 -460z"/>
<path d="M9950 1150 l0 -70 140 0 140 0 0 -390 0 -390 85 0 85 0 0 390 0 390
135 0 135 0 0 70 0 70 -360 0 -360 0 0 -70z"/>
<path d="M1347 1192 c-101 -36 -157 -112 -157 -213 1 -72 28 -130 80 -168 23
-16 90 -46 150 -66 172 -57 215 -97 214 -193 -1 -118 -72 -191 -194 -200 -89
-6 -143 9 -210 60 -50 38 -54 39 -67 22 -7 -10 -13 -21 -13 -25 0 -13 78 -69
127 -91 69 -31 199 -31 265 1 121 58 188 209 142 319 -32 76 -75 107 -234 163
-52 18 -109 42 -127 52 -92 54 -98 194 -11 260 42 32 117 50 174 41 24 -3 70
-22 101 -41 53 -32 58 -33 70 -17 19 25 17 28 -26 58 -80 55 -193 71 -284 38z"/>
<path d="M120 751 l0 -451 35 0 35 0 0 205 0 205 73 0 c39 0 77 -4 83 -8 6 -4
81 -96 167 -204 151 -191 158 -198 193 -198 l35 0 -60 78 c-33 42 -107 136
-165 207 l-104 130 41 11 c133 35 207 121 207 241 0 91 -43 158 -127 200 -56
27 -65 28 -235 32 l-178 3 0 -451z m338 384 c75 -23 118 -64 132 -128 16 -68
1 -125 -46 -177 -49 -54 -103 -70 -241 -70 l-113 0 0 195 0 195 108 0 c69 0
127 -6 160 -15z"/>
<path d="M890 750 l0 -450 35 0 35 0 0 450 0 450 -35 0 -35 0 0 -450z"/>
<path d="M1900 749 l0 -450 33 3 32 3 3 218 2 217 30 0 c16 0 40 -4 55 -10 14
-5 118 -104 232 -220 190 -194 208 -210 240 -210 l35 0 -143 151 c-79 82 -180
188 -224 234 l-80 83 208 214 c206 212 207 213 175 216 -31 4 -44 -8 -233
-202 l-200 -206 -47 0 -48 0 0 205 0 205 -35 0 -35 0 0 -451z"/>
</g>
</svg>

  )
}

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();
  const buildVersion = process.env.REACT_APP_BUILD_VERSION ?? "default";
  console.info("Current web version: " + buildVersion);
  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <SoftBox
      display="none"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SoftBox>
  );

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={brandImg}
            brandName="Risk Assesment"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </ThemeProvider>
    </>
  );
}


