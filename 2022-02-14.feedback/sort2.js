const arr = [3, 1, 2, 5, 4];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        const a = arr[j];
        const b = arr[i];
        // 부등호에 따라 오름, 내림 차순이 변경된다.
        // 0보다 크냐 작냐에 따라 정렬되는 순서가 달라진다.
        // 지금 이걸 보고 정확히 이해가 되지 않아도 괜찮고,
        // 이해가 안된다면 그냥 넘어가자.
        // 이거에 붙들려있으면 진도를 나갈 수 없다.
        if (a - b > 0) {
          const temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
        console.log('a', a, 'b', b, 'arr', arr)
    }
}

console.log(arr);