* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Tahoma, sans-serif;
  background: linear-gradient(135deg, #eef6ff, #ffffff);
  color: #222;
  text-align: center;
}

.app {
  max-width: 900px;
  margin: auto;
  padding: 24px;
}

h1 {
  margin-bottom: 5px;
  font-size: 36px;
}

.subtitle {
  color: #555;
  margin-bottom: 20px;
}

.card {
  background: white;
  border-radius: 20px;
  padding: 25px;
  margin: 20px auto;
  max-width: 500px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
}

.label {
  font-size: 18px;
  color: #666;
}

#noteDisplay {
  font-size: 110px;
  font-weight: bold;
  color: #1976d2;
  margin: 10px 0;
}

#result {
  font-size: 28px;
  min-height: 40px;
  margin: 12px 0;
}

.score-box {
  font-size: 22px;
  margin: 15px 0;
}

#newBtn {
  padding: 12px 24px;
  font-size: 18px;
  border: none;
  border-radius: 12px;
  background: #1976d2;
  color: white;
  cursor: pointer;
}

#newBtn:hover {
  background: #0d47a1;
}

.piano {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 35px auto 10px;
  max-width: 720px;
  height: 230px;
}

.white-key {
  width: 90px;
  height: 220px;
  background: white;
  border: 2px solid #222;
  border-radius: 0 0 10px 10px;
  padding-top: 150px;
  font-size: 24px;
  cursor: pointer;
  user-select: none;
}

.white-key:active,
.white-key.active {
  background: #bbdefb;
}

.black-key {
  position: absolute;
  width: 55px;
  height: 135px;
  background: #111;
  color: white;
  border-radius: 0 0 8px 8px;
  padding-top: 85px;
  font-size: 15px;
  z-index: 2;
  cursor: pointer;
  user-select: none;
}

.black-key:active,
.black-key.active {
  background: #555;
}

.cs { left: calc(50% - 270px + 62px); }
.ds { left: calc(50% - 270px + 152px); }
.fs { left: calc(50% - 270px + 332px); }
.gs { left: calc(50% - 270px + 422px); }
.as { left: calc(50% - 270px + 512px); }

.hint {
  color: #666;
  font-size: 16px;
}

small {
  color: #777;
}
