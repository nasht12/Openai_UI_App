const dp = (s) => {
  const dp = [...Array(s.length)].map((e) => Array(s.length).fill(false));
  let lps = "";

  if (s.length <= 1) return s;

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    lps = s[0];
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) dp[i][i + 1] = true;
    if (dp[i][i + 1]) lps = s.substring(i, i + 2);
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 2; j < s.length; j++) {
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      if (dp[i][j]) lps = lps.length < j - i + 1 ? s.substring(i, j + 1) : lps;
    }
  }

  console.log("arr", dp);
  console.log("lps", lps);

  return lps;
};

var reverse = function (x) {
  if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1) return 0;
  let multiplier = 1;
  if (x < 0) multiplier = -1;
  s = String(Math.abs(x));
  total = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    total += Number(s[i] * Math.pow(10, i));
  }
  console.log("answer", total * multiplier);
  console.log("answer", Math.pow(2, 31) - 1);
  return total * multiplier;
};

var isPrefixOfWord = function (sentence, searchWord) {
  const arr = sentence.split(" ");
  const slen = searchWord.length;
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].substring(0, slen) === searchWord) {
      console.log(i + 1);
      return i + 1;
    }
  }
  console.log(-1);
};
// dp("baabaab");
var subtractProductAndSum = function (n) {
  const ans = String(n).split("").map(Number);
  let sumA = 0;
  let prodA = 1;
  ans.map((e) => {
    sumA += e;
    prodA *= e;
  });
  console.log("ans", ans);
  console.log("ans", sumA, prodA);
  console.log("ans", prodA - sumA);
};
// subtractProductAndSum(234);

var firstPalindrome = function (words) {
  let res = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i].split("").reverse().join("")) {
      res = words[i];
      return words[i];
    }
  }
  console.log(res);
  return "res";
};

// firstPalindrome(["abc", "car", "ada", "racecar", "cool"]);

var runningSum = function (nums) {
  let runSum = [];
  var arrSum = (arr) => {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };
  for (let i = 0; i < nums.length; i++) {
    let sub = nums.slice(0, i + 1);
    console.log("sub", sub);
    console.log("arrSum", arrSum(sub));
    runSum.push(arrSum(sub));
  }
  return runSum;
};

// runningSum([1, 2, 3, 4]);

var mergeTwoLists = function (list1, list2) {
  let i = 0;
  let j = 0;
  let merged = [];
  while (i < list1.length || j < list2.length) {
    if (list1[i] < list2[j] || list2[j] === undefined) {
      merged.push(list1[i]);
      i++;
    } else {
      merged.push(list1[j]);
      j++;
    }
  }
  console.log("merged", merged);
  return merged;
};

// mergeTwoLists([1, 2, 4], [1, 3, 4]);

var findGCD = function (nums) {
  let x = nums.sort((a, b) => a - b);
  let sm = nums[0];
  let lg = nums[nums.length - 1];
  let res = 0;
  for (let i = 1; i <= sm; i++) {
    if (sm % i === 0 && lg % i === 0) res = i;
  }
  console.log("x", x);
  console.log("sm", sm, lg);
  console.log("res", res);
  return res;
};
// findGCD([3, 3]);

var mostWordsFound = function (sentences) {
  let res = 0;
  for (let i = 0; i < sentences.length; i++) {
    res = Math.max(sentences[i].split(" ").length, res);
  }
  console.log(res);
  return res;
};
// mostWordsFound([
//   "alice and bob love leetcode",
//   "i think so too",
//   "this is great thanks very much",
// ]);

var shuffle = function (nums, n) {
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(nums[i], nums[n + i]);
  }
  console.log("res", res);
  return res;
};
// shuffle([2, 5, 1, 3, 4, 7], 3);

var restoreString = function (s, indices) {
  let res = [];
  for (let i = 0; i < indices.length; i++) {
    res.push();
  }
};
