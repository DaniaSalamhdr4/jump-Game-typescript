const canJump = (nums: number[]): boolean => {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    // إذا لم نستطع الوصول لهذا المكان
    if (i > maxReach) {
      return false;
    }

    // تحديث أبعد مكان
    maxReach = Math.max(maxReach, i + nums[i]!);
  }

  return true;
};

console.log(canJump([2, 3, 1, 1, 4]));
