function worker(workerObj) {
  if (workerObj.dizziness) {
    workerObj.levelOfHydrated += 0.1 * workerObj.experience * workerObj.weight;
    workerObj.dizziness = false;
  }

  return workerObj;
}

worker({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });
