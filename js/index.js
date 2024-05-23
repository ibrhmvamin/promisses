// 1. **Моделирование Задержки Выполнения**:
// Напишите функцию, которая принимает число в качестве входных данных и
// возвращает промис, который разрешается после указанного количества миллисекунд.
// Используйте эту функцию, чтобы создать задержку в 2 секунды, а затем
// зарегистрировать сообщение в консоли после разрешения промиса.

// function waitingPromise(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// waitingPromise(2000).then(() => {
//   console.log("Promise executed after 2 seconds");
// });

// 2. **Цепочка Промисов**:
// Создайте две функции, `firstTask` и `secondTask`, каждая из которых возвращает
// промис, разрешающийся строковым сообщением. Свяжите эти промисы так, чтобы
// вторая задача выполнялась только после разрешения первой. Наконец,
// зарегистрируйте объединенный результат в консоли.

// function firstJob() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("First function completed"), 1000);
//   });
// }

// function secondJob() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Second function completed"), 1000);
//   });
// }

// firstJob()
//   .then((result1) => {
//     console.log(result1);
//     return secondJob();
//   })
//   .then((result2) => {
//     console.log(result2);
//     console.log("Both functions completed");
//   });

// 3. **Использование Promise.all()**:
// Создайте три отдельные функции, каждая из которых возвращает промис, который
// разрешается строковым сообщением после указанной задержки. Используйте
// `Promise.all()` для выполнения всех трех функций параллельно и зарегистрируйте
// массив разрешенных сообщений после разрешения всех промисов.

// function task1() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Task 1 completed"), 1000);
//   });
// }

// function task2() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Task 2 completed"), 2000);
//   });
// }

// function task3() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Task 3 completed"), 3000);
//   });
// }

// Promise.all([task1(), task2(), task3()]).then((results) => {
//   console.log("All tasks completed:");
//   console.log(results);
// });

// 4. **Сценарий с Promise.race()**:
// Напишите две функции, `fastTask` и `slowTask`, каждая из которых возвращает
// промис, который разрешается строковым сообщением после различных временных
// задержек (один быстрый, другой медленный). Используйте `Promise.race()` для
// выполнения обеих функций и зарегистрируйте результат промиса, который
// разрешается первым.

// function fastTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Fast task completed"), 1000);
//   });
// }

// function slowTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Slow task completed"), 3000);
//   });
// }

// Promise.race([fastTask(), slowTask()]).then((result) => {
//   console.log("First completed task:");
//   console.log(result);
// });
