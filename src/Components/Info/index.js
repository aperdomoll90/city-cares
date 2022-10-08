import React, { useState } from 'react'
import './styles.css'
const paper = require('../../Media/paper-bin.png')
const metal = require('../../Media/metal-bin.png')
const plastic = require('../../Media/plastic-bin.png')
const glass = require('../../Media/glass-bin.png')
const HappyFrenchie = require('../../Media/HappyFrenchie.png')

export default function Index() {
  const [modal, setModal] = useState(false)
  const [url, setUrl] = useState('')

  const openModal = () => {
    setModal(!modal)
    setUrl('vhpc0UULjDU')
  }
  const openModal2 = () => {
    setModal(!modal)
    setUrl('BS-gN6jiXw4')
  }

  return (
    <section className='info-section'>
      {modal && (
        <div className='video-modal'>
          <div
            className='close-button'
            onClick={() => {
              setModal(false)
              setUrl('')
            }}>
            X
          </div>
          <iframe className='vid-frame' loading='lazy' src={`https://www.youtube.com/embed/${url}`} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' />
        </div>
      )}

      <div className='trash-grid'>
        <img
          className='bins'
          width={130}
          src={glass}
          alt='trash-can'
          onClick={() => {
            setModal(true)
            setUrl('vhpc0UULjDU')
          }}
        />
        <img
          className='bins'
          width={133}
          src={paper}
          alt='trash-can'
          onClick={() => {
            setModal(true)
            setUrl('vhpc0UULjDU')
          }}
        />
        <img className='bins' width={130} src={metal} alt='trash-can' onClick={() => setModal(true)} />
        <img
          className='bins'
          width={125}
          src={plastic}
          alt='trash-can'
          onClick={() => {
            setModal(true)
            setUrl('BS-gN6jiXw4')
          }}
        />
      </div>
      <img className='HappyFrenchie' src={HappyFrenchie} alt='cartoon frenchie' />
      <div className='hill firstHill' />
      <div className='hill secondHill' />
      <div className='hill rockLine' />

      <svg className='hill lastHill' viewBox='0 0 1512 506' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0 922V238.03C1.92088 236.767 3.95393 235.631 5.7346 234.186C11.2028 229.697 16.5729 225.096 22.5598 220.074C24.5648 230.833 29.6965 238.759 35.7817 247.064C33.6785 246.475 31.982 245.956 30.1733 245.535C29.4658 245.453 28.7522 245.439 28.0421 245.493C27.9218 246.208 27.9218 246.938 28.0421 247.653C29.4442 251.399 31.6455 254.667 35.7817 255.256C37.2896 255.357 38.7335 255.904 39.9296 256.828C41.1256 257.753 42.0196 259.012 42.4977 260.447C42.9884 261.868 43.4003 263.315 43.7316 264.781L49.1297 261.26C50.9524 261.443 52.0881 261.906 52.9154 261.583C54.9936 260.727 56.9924 259.69 58.8883 258.483C59.5333 258.076 60.4026 256.771 60.2063 256.477C58.9024 254.373 60.655 253.671 61.7066 252.675C62.5478 251.847 63.2909 250.95 63.6415 250.571L50.0691 245.675C52.5648 242.869 54.5138 240.807 56.3645 238.661C61.973 232.166 67.2869 225.517 73.0215 219.204C75.4332 216.539 76.1903 216.945 77.8027 220.172C82.5699 229.697 87.351 239.222 92.2724 249.07L89.2298 251.875C90.3796 254.358 91.2769 256.884 94.8383 257.234C95.974 257.346 96.8853 259.002 98.0631 259.619C98.872 259.896 99.7499 259.896 100.559 259.619C101.176 256.813 103.363 256.084 105.62 255.214C106.725 254.709 107.657 253.889 108.298 252.857C111.701 247.723 115.033 242.537 118.295 237.3C119.698 235.056 121.1 235.224 122.502 237.09C123.904 238.956 125.306 241.158 126.554 243.276C131.05 250.861 135.523 258.464 139.972 266.086C141.066 267.966 143.071 270.042 142.86 271.809C142.285 276.551 145.454 279.034 147.67 282.232C148.044 283.168 148.225 284.17 148.202 285.178L147.347 285.655C146.192 284.384 144.899 283.245 143.491 282.26C142.14 281.779 140.719 281.518 139.285 281.489C139.248 282.67 139.443 283.848 139.86 284.954C141.64 287.661 143.786 290.116 145.636 292.796C147.319 295.222 149.506 297.733 145.636 300.609L151.329 304.607L145.44 305.239C150.712 312.954 159.882 314.974 166.205 321.637C164.193 320.882 162.126 320.282 160.022 319.842C159.223 319.744 158.297 320.698 157.442 321.175C157.97 321.916 158.592 322.586 159.293 323.167C160.357 323.744 161.463 324.241 162.602 324.654L163.597 326.056C162.739 326.59 161.788 326.956 160.793 327.136C157.695 327.052 154.596 326.702 151.119 326.435C149.941 328.68 151.89 330.265 153.544 331.527C159.237 335.904 165.673 338.247 172.879 336.605C179.567 335.076 185.667 336.69 191.499 339.495C197.332 342.301 203.613 344.363 210.203 344.083C213.092 343.956 215.812 344.588 218.532 344.672C222.748 344.643 226.96 344.395 231.151 343.928H231.866H237.909L238.624 343.83L252.771 343.97H253.486L261.156 343.563C260.791 338.906 261.492 334.123 259.852 330.335C257.665 325.229 253.851 320.768 250.402 316.307C247.577 312.771 245.817 308.504 245.326 304.004C245.097 300.409 245.163 296.801 245.522 293.216C245.789 292.032 246.238 290.896 246.854 289.85C247.858 290.575 248.759 291.434 249.532 292.403C251.341 295.391 254.173 295.489 256.052 292.501C256.725 291.421 257.454 290.397 258.702 288.657C259.431 290.705 259.992 291.898 260.286 293.146C260.735 295.068 259.796 297.481 262.824 298.309C264.801 298.842 266.526 300.259 268.433 300.834C272.529 302.157 276.713 303.192 280.953 303.934C284.361 304.439 288.132 304.874 291.315 303.934C296.657 302.335 301.733 302.882 305.252 307.146C310.229 313.164 316.623 314.343 323.97 313.347C327.447 312.884 331.177 312.168 334.794 314.525C334.234 314.935 333.722 315.405 333.266 315.928C328.302 323.573 320.423 324.738 312.318 325.341C312.014 325.307 311.72 325.207 311.458 325.047C311.197 324.887 310.973 324.671 310.804 324.415C310.29 323.546 309.849 322.636 309.486 321.694L308.084 322.633C307.607 328.09 303.541 332.622 305.154 338.822C305.953 341.95 307.692 342.918 309.781 342.848C314.772 342.68 319.736 341.81 324.699 341.221C326.788 341.075 328.867 340.808 330.924 340.421C333.729 339.762 336.533 338.654 339.337 338.022C344.945 336.774 350.75 336.157 356.162 334.487C362.037 332.72 367.87 331.149 373.955 332.074C378.946 332.832 383.77 333.646 388.873 332.678C394.86 331.527 400.973 331.092 406.946 329.872C411.027 329.086 414.896 327.291 418.962 326.477C425.707 325.074 432.535 324.233 439.321 323.11C441.789 322.704 444.228 322.157 446.696 321.778C452.809 320.838 458.908 319.407 465.05 319.239C472.06 319.028 478.468 316.896 485.128 315.199C495.234 312.52 504.811 308.142 513.45 302.251C516.593 300.221 519.872 298.411 523.265 296.836C528.453 294.353 533.907 292.403 538.997 289.751C548.489 284.786 557.869 279.567 567.193 274.321C575.886 269.397 583.822 263.785 587.313 253.587C587.782 252.277 588.609 251.125 589.699 250.262C590.79 249.399 592.1 248.86 593.482 248.705C598.605 248.133 603.45 246.075 607.419 242.785C608.453 241.762 609.665 240.935 610.994 240.344C619.267 237.623 627.581 234.986 635.938 232.489C641.953 230.679 648.459 229.935 654.039 227.256C662.297 223.286 669.911 218.278 678.744 215.08C687.241 212.008 694.966 206.466 702.58 201.374C707.237 198.453 712.427 196.483 717.849 195.581C720.003 195.391 722.172 195.703 724.186 196.492C726.85 197.278 729.318 199.017 731.996 199.298C736.049 199.642 740.123 199.67 744.18 199.382C752.957 199.102 761.44 199.382 768.871 205.33C773.732 208.876 778.783 212.154 784 215.15C790.604 219.358 797.152 223.567 805.228 224.507C806.63 224.675 808.032 226.022 809.336 227.046C813.444 230.469 817.202 234.663 823.469 231.436C824.063 231.204 824.706 231.122 825.34 231.198C825.973 231.273 826.578 231.505 827.101 231.871C832.05 238.002 839.888 236.374 846.071 239.138C848.791 240.358 852.002 240.541 854.161 240.948C857.16 239.989 860.218 239.229 863.317 238.675C866.542 238.296 869.879 238.815 873.132 238.535C878.75 238.156 884.343 237.473 889.887 236.487C902.223 234.152 913.983 229.425 924.505 222.571C928.85 219.625 933.427 217.035 938.189 214.827C947.654 210.619 957.342 206.761 966.904 202.735C970.466 201.234 973.915 199.747 978.009 199.929C985.02 200.336 992.282 199.452 999.237 200.462C1009.47 201.949 1019.54 204.671 1029.69 206.761C1035.55 208.186 1041.48 209.296 1047.46 210.086C1057.94 211.11 1067.73 207.28 1077.52 204.362C1084.53 202.286 1091.23 198.891 1098.14 196.31C1105.34 193.626 1112.58 191.101 1119.86 188.735C1124.19 187.332 1128.62 185.55 1133.07 185.41C1137.22 185.259 1141.35 184.79 1145.43 184.007C1154.55 182.172 1163.36 179.085 1171.63 174.833C1177.36 172.027 1182.84 168.661 1188.68 165.981C1194.04 163.541 1199.58 161.515 1205.25 159.921C1211.63 158.069 1218.25 157.115 1224.74 155.713C1228.48 154.885 1232.15 153.258 1235.95 153.117C1240.68 152.935 1244.37 150.536 1248.17 148.558C1253.26 145.827 1258.16 142.728 1262.8 139.286C1268.55 135.077 1274.02 130.574 1279.63 126.099C1286.49 120.572 1293.08 114.694 1301.5 111.482C1304.29 110.261 1307 108.889 1309.63 107.372C1306.94 105.295 1306.83 103.949 1309.14 101.844C1309.58 101.438 1310.27 100.905 1310.24 100.442C1310.04 98.0849 1311.46 97.636 1313.31 97.4817C1314.19 97.2521 1315.03 96.8928 1315.8 96.4156L1315.62 95.9386L1308.46 96.9206C1307.95 90.2572 1314.89 88.139 1316.1 82.5417H1310.01C1310.69 77.0427 1316.53 75.724 1318.1 71.207L1311.85 72.6098L1311.23 71.5717L1319.1 62.1448C1319.1 62.1448 1319.1 61.9905 1319.18 61.738C1318.39 61.8085 1317.6 61.8085 1316.81 61.738C1315.79 61.5276 1314.79 61.1207 1313.78 60.8121C1314.23 59.903 1314.79 59.0507 1315.44 58.273C1317.16 56.6177 1319.04 55.1448 1320.84 53.5596C1321.14 53.2221 1321.4 52.8556 1321.62 52.4654L1317.15 51.9043L1323.42 44.6236C1322.46 43.1367 1320.89 41.3551 1321.17 40.9904C1322.58 39.3413 1324.15 37.8289 1325.84 36.4733C1325.49 35.8841 1324.34 34.832 1324.44 34.0324C1325.11 30.2536 1326.05 26.5269 1327.24 22.88C1327.57 21.9121 1329.35 21.4772 1330.43 20.7758C1331.07 22.361 1331.44 23.2588 1331.83 24.1566C1332.7 26.4011 1334.38 28.7017 1334.23 30.8761C1334.06 33.3731 1335.41 34.7899 1336.01 36.7118C1336.98 39.812 1341.34 42.4773 1337.8 46.279C1342.92 51.0766 1342.92 51.0766 1342.95 53.4614L1340.02 53.3071C1340.53 53.8154 1341.09 54.2843 1341.67 54.7099C1344.34 56.3091 1346.75 58.0065 1347.86 61.2049C1349.26 65.3011 1348.99 70.211 1353.13 73.1429C1353.24 73.2612 1353.33 73.4074 1353.37 73.5673C1353.41 73.7271 1353.41 73.8951 1353.37 74.0547C1351.38 76.4956 1354.18 77.7441 1354.67 79.5537C1354.95 80.5778 1355.65 81.8263 1355.33 82.6259C1353.3 87.6059 1355.15 91.3374 1358.76 94.9566L1362.4 90.5939C1361 90.7736 1359.59 90.7736 1358.19 90.5939C1355.39 89.7382 1355.71 87.5919 1358.81 84.4916C1359.82 83.3204 1360.73 82.0677 1361.54 80.7461C1359.97 80.2131 1358.39 79.694 1356.82 79.1469C1356.61 79.0506 1356.42 78.928 1356.25 78.7822C1355.27 73.9425 1361.53 74.3914 1362.24 70.3653H1354.43C1357.24 65.8061 1361.44 63.8843 1364.78 60.251H1355.36L1366.14 45.4373L1361.11 46.0405L1360.56 45.1707L1364.58 40.9623L1361.33 40.4012C1361.81 34.9583 1368.63 33.7939 1368.8 28.5895L1365.82 28.351C1365.47 23.4411 1370.79 22.9502 1371.94 20.5934L1369.01 17.4231C1370.17 16.4083 1371.06 15.1372 1371.64 13.712C1372.21 12.2867 1372.44 10.747 1372.31 9.21661C1372.29 9.10994 1372.29 9.00062 1372.31 8.89396C1373.71 6.08833 1375.11 3.2827 1376.85 -0.013916C1377.58 0.196506 1379.56 0.182478 1380.1 1.05222C1383.12 5.87791 1385.82 10.8719 1388.52 15.908C1389.01 16.8199 1389.48 18.4752 1389.05 19.0223C1386.92 21.5754 1388.8 22.5854 1390.38 24.1285C1391.62 25.349 1393.31 27.3831 1393 28.5895C1392.34 31.1987 1394.01 32.4472 1395.27 33.359C1397.55 35.0144 1396.44 36.0805 1395.72 36.8801L1403.44 57.1227C1404.1 55.2695 1405.02 53.5144 1406.16 51.9043C1408.51 49.3231 1407.67 48.2008 1404.61 47.6958L1409.46 37.4272C1407.66 36.9362 1406.49 36.333 1408.48 33.9482C1410.01 31.9018 1411.24 29.6549 1412.16 27.2708C1413.07 25.1666 1413.56 22.866 1414.4 20.7337C1414.78 20.0162 1415.39 19.4513 1416.14 19.1345C1416.43 18.9942 1417.32 19.5413 1417.54 19.9762C1418.33 21.3175 1418.99 22.7258 1419.53 24.1846C1420.93 28.3931 1422.34 32.7278 1423.74 36.9503C1424.28 38.5214 1426.54 39.7559 1424.4 41.7198C1424.63 42.1128 1424.89 42.4879 1425.18 42.8421C1427.89 46.9664 1430.3 51.1888 1430.27 56.3512C1430.14 57.1298 1430.17 57.9265 1430.36 58.6939C1431.76 61.7801 1430.9 65.5536 1433.8 68.3172C1436.36 70.7581 1435.91 72.1749 1433.02 74.181C1434.86 77.169 1437.03 80.0868 1435.12 84.0007C1434.74 85.1957 1434.79 86.4856 1435.26 87.648C1436.41 91.0288 1438.28 94.2272 1438.95 97.6781C1439.69 101.48 1444.43 99.8946 1445.26 103.163C1445.26 103.388 1446.26 103.444 1446.8 103.5C1447.25 103.551 1447.69 103.508 1448.12 103.374C1449.44 102.84 1450.73 102.223 1451.71 101.788L1454.63 98.7442V92.9085L1450.73 92.4596C1451.15 90.5767 1451.8 88.753 1452.66 87.0307C1453.65 85.8808 1454.82 84.8999 1456.13 84.1269C1455.47 83.1974 1455 82.156 1454.72 81.0547C1454.82 79.46 1455.07 77.8776 1455.45 76.3273L1454.74 76.2291L1460.22 71.3613L1456.38 70.7861L1461.44 58.8903C1459.65 57.9504 1459.62 56.9544 1461.27 54.78C1463.9 50.9156 1466.28 46.8911 1468.41 42.7298C1470.12 42.6036 1471.72 43.0946 1471.51 45.9703C1471.56 46.8434 1471.84 47.6884 1472.31 48.4253C1474.05 51.8061 1475.85 55.1588 1477.62 58.5396C1477.8 59.0238 1477.94 59.5209 1478.04 60.0266C1478.39 61.3209 1478.8 62.5948 1479.29 63.8422C1479.92 65.245 1481.7 67.0827 1481.29 67.9384C1480.16 70.3513 1481.95 71.1088 1482.92 72.4274C1483.4 73.0868 1484.32 74.0407 1484.21 74.4335C1482.18 78.8804 1485.85 81.4475 1487.59 84.5197C1488.37 85.9225 1489.09 86.5257 1487.13 87.4376C1486.55 87.7041 1486.36 89.3314 1486.41 90.2432C1486.64 91.7273 1486.99 93.1909 1487.45 94.62C1491.23 95.139 1495.62 94.7462 1498.67 91.9686C1498.04 90.7171 1497.57 89.3932 1497.26 88.0267C1497.18 86.3574 1496.97 85.2211 1494.89 85.2211C1492.29 85.2211 1492.79 83.3133 1493.25 81.9385C1493.82 80.4951 1494.59 79.1431 1495.55 77.9265C1496.56 76.5237 1497.73 75.1208 1499.18 73.3673L1492.17 71.7541L1500.18 62.4815L1496.3 60.7139L1503.31 52.8021C1500.25 51.2028 1500.25 51.2029 1505.86 44.3431C1503.49 43.81 1502.82 42.7719 1504.01 41.4393C1505.2 40.1066 1506.67 38.5354 1508 37.0905L1508.69 36.1787L1507.5 36.5715C1507.29 35.8981 1506.74 35.0985 1506.94 34.5655C1507.95 31.7598 1509.11 28.9542 1510.33 26.1486C1510.54 25.6856 1511.31 25.4612 1512.06 24.9842V922H861.873C860.471 922 858.956 921.916 857.484 921.874L858.157 903.764C858.325 903.146 858.508 902.529 858.69 901.926L857.961 901.842L858.129 903.735C857.736 904.633 857.454 905.575 857.288 906.541C857.05 911.647 856.923 916.754 856.769 921.874C855.367 921.874 854.077 921.972 852.717 921.972L0 922ZM268.475 343.409L269.19 344.265C272.555 343.213 276.411 345.864 279.537 342.315C279.969 342.086 280.451 341.967 280.939 341.967C281.428 341.967 281.909 342.086 282.342 342.315C284.879 344.405 287.487 343.465 290.165 342.974C292.843 342.483 295.367 342.147 298.017 341.726C298.095 341.261 298.095 340.787 298.017 340.323C296.503 336.437 294.988 332.537 293.362 328.694C291.736 324.85 283.786 322.844 280.855 325.986C280.198 326.726 279.313 327.225 278.339 327.403C277.366 327.581 276.361 327.428 275.485 326.968C270.424 325.046 269.372 325.565 269.526 330.798C269.526 333.098 270.199 335.413 270.031 337.672C269.714 339.633 269.192 341.556 268.475 343.409V343.409ZM110.472 275.555C109.757 274.601 109.476 273.787 108.985 273.633C108.634 273.534 108.267 273.508 107.905 273.556C107.543 273.604 107.195 273.726 106.882 273.914C104.218 275.934 101.428 275.317 98.5538 274.601C97.6737 274.496 96.784 274.496 95.9039 274.601C95.9039 275.625 95.4972 277.056 96.002 277.589C98.0442 279.636 100.217 281.548 102.508 283.313C102.928 283.649 104.12 283.747 104.373 283.453C106.476 280.858 108.439 278.192 110.472 275.555ZM1404.74 77.674C1405.69 75.8503 1406.52 74.3353 1407.28 72.7922C1407.42 72.6319 1407.51 72.4286 1407.53 72.2131C1407.55 71.9976 1407.5 71.7816 1407.39 71.5977C1407.27 71.4138 1407.1 71.2721 1406.9 71.194C1406.7 71.1159 1406.48 71.1057 1406.27 71.1649C1405.28 72.4164 1404.46 73.7882 1403.83 75.2471C1403.6 75.8924 1404.43 76.9164 1404.74 77.674Z'
          fill='#310D1F'
        />
      </svg>
    </section>
  )
}
