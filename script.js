body {
  margin: 0;
  font-family: Arial, Tahoma, sans-serif;
  background: #f1f7ff;
  text-align: center;
  color: #222;
}

.app {
  max-width: 950px;
  margin: auto;
  padding: 20px;
}

h1 {
  font-size: 36px;
}

.card {
  background: white;
  border-radius: 20px;
  padding: 25px;
  margin: 20px auto;
  max-width: 600px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

#noteDisplay {
  font-size: 100px;
  font-weight: bold;
  color: #1976d2;
}

#result {
  font-size: 28px;
  margin: 15px;
  min-height: 40px;
}

.score {
  font-size: 22px;
  margin: 15px;
}

button {
  margin: 6px;
  padding: 12px 18px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background: #1976d2;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #0d47a1;
}

/* Staff */
.staff {
  position: relative;
  width: 280px;
  height: 120px;
  margin: 20px auto;
}

.line {
  height: 2px;
  background: #222;
  margin: 18px 0;
}

#noteSymbol {
  position: absolute;
  left: 130px;
  font-size: 42px;
  color: #111;
}

/* Piano */
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
}
