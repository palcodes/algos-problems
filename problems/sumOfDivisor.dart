//You are given two numbers n and k. For each number in the interval [1, n], your task is to calculate its largest divisor that is not divisible by k. Print the sum of these divisors.

//Note: k is a prime number.

//Input format

//The first line contains an integer T representing the number of test cases that will follow.
//Each test case consists of one line containing two integers n and k.
//Output format

//The output must contain the answer for each test case on a different line.

//Each answer consists of a single integer.

void main() {
  int n = 10;
  int k = 3;

  List<int> data = List.generate(n, (index) => index + 1);

  List<int> result = data.map((elem) {
    if (elem < k) {
      return elem;
    } else if (elem % k == 0) {
      int newVal = elem ~/ k;
      print(newVal);
      if (newVal < k) {
        return newVal;
      }
      if (newVal % k == 0) {
        return 1;
      }
      return newVal;
    }
    return elem;
  }).toList();

  print(data);
  print(result);
}
