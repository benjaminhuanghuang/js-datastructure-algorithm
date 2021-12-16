

void exchange(int &a, int &b)
{
  if (a == b)
    return; //防止&a，&b指向同一个地址；那样结果会错误。
  a ^= b;    // c = a ^ b
  b ^= a;    // b = b ^ c = b ^ a ^ b = a
  a ^= b;    // a = c ^ a = a ^ b ^ a = b
}