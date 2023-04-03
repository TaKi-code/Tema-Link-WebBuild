const canvas = document.getElementById("myCanvas");
      const context = canvas.getContext("2d");

      function drawClock() {
        const radius = canvas.width / 2;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(radius, radius, radius - 10, 0, 2 * Math.PI);
        context.strokeStyle = "black";
        context.lineWidth = 10;
        context.stroke();
        context.closePath();
        const now = new Date();
        let hour = now.getHours();
        const minute = now.getMinutes();
        const second = now.getSeconds();
        if (hour > 12) {
          hour -= 12;
        }
        const hourAngle = (hour * Math.PI) / 6 + (minute * Math.PI) / 360;
        const minuteAngle = (minute * Math.PI) / 30;
        const secondAngle = (second * Math.PI) / 30;
        drawHand(hourAngle, radius * 0.5, 8);
        drawHand(minuteAngle, radius * 0.8, 5);
        drawHand(secondAngle, radius * 0.9, 2);
      }

      function drawHand(angle, length, width) {
        context.beginPath();
        context.lineWidth = width;
        context.lineCap = "round";
        context.moveTo(canvas.width / 2, canvas.height / 2);
        context.lineTo(
          canvas.width / 2 + Math.cos(angle) * length,
          canvas.height / 2 + Math.sin(angle) * length
        );
        context.strokeStyle = "black";
        context.stroke();
        context.closePath();
      }

      setInterval(drawClock, 1000);
