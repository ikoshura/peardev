export const translations = {
  en: {
    // Welcome & Mode Select
    welcomeTitle: 'Aptitude Test Simulation',
    welcomeSubtitle: 'This simulation is designed to familiarize you with the format and types of questions you might encounter.',
    startButton: 'Start',
    pressEnter: 'press Enter ↵',
    pressEnterInline: 'press Enter ↵',
    chooseMode: 'Choose Your Mode',
    chooseModeSubtitle: "Select how you'd like to practice today.",
    learnMode: 'Practice Mode',
    learnModeDescription: 'Go through questions one-by-one with immediate feedback and detailed explanations. No time pressure.',
    startLearning: 'Start Practice',
    examMode: 'Exam Simulation',
    examModeDescription: 'Take a timed test that mimics the real exam environment. Review your results at the end.',
    startExam: 'Start Exam',
    learningModule: 'Learning Module',
    learningModuleDescription: 'Study the basic concepts of programming required for the test, from sequence to OOP.',
    startReading: 'Start Learning',
    logicHub: 'Logic Hub',
    logicHubDescription: 'Explore external resources to sharpen your logical reasoning skills.',
    backToWelcome: 'Back to Welcome',
    backToModeSelect: 'Back to Mode Select',
    disclaimer: 'This application is intended for educational and personal self-study purposes only. It is not affiliated with, endorsed by, or in any way officially connected with Apple Inc.',
    appBy: 'An application by abrarzha/ikoshura',
    
    // Test Layout & General UI
    questions: 'Questions',
    question: 'Question',
    endSession: 'End',
    finishExam: 'Finish',
    finishSession: 'Finish',
    previousButton: 'Previous',
    nextButton: 'Next Question',
    nextChapterButton: 'Next Chapter',
    checkAnswer: 'Check Answer',
    correct: 'Correct!',
    incorrect: 'Incorrect',
    backButton: 'Back',

    // Module Page
    moduleTitle: 'Programming Basics Study Guide',
    chapters: 'Chapters',
    
    // Module Content Sidebar
    ch1_sidebar_title: 'Chapter 1: Sequence',
    ch2_sidebar_title: 'Chapter 2: Branching',
    ch3_sidebar_title: 'Chapter 3: Iteration',
    ch4_sidebar_title: 'Chapter 4: Array',
    ch5_sidebar_title: 'Chapter 5: String Function',
    ch6_sidebar_title: 'Chapter 6: Pseudocode',
    ch7_sidebar_title: 'Chapter 7: OOP',
    ch8_sidebar_title: 'Chapter 8: Variables & Data',
    ch9_sidebar_title: 'Chapter 9: Functions',
    ch10_sidebar_title: 'Chapter 10: Boolean Logic',

    // Module Content - Generic
    introduction: 'Introduction',
    simple_example: 'Simple Example',
    real_world_analogy: 'Real-World Analogy',
    exercises: 'Exercises',
    exercise_discussion: 'Exercise Discussion',

    // --- CHAPTER 1: SEQUENCE ---
    ch1_title: 'Module 1: Sequence (Instruction Order)',
    ch1_intro: "Imagine you're cooking instant noodles. What happens if you don't follow the steps in the correct order? For instance, putting the noodles in before the water boils, or adding the seasoning before boiling the noodles. The result would be a mess! In both cooking and programming, the sequence of instructions is important. <br/><br/> Sequence means the program executes instructions one by one, in order, from top to bottom. This is the most fundamental concept in algorithms and programming: the computer will execute the first line of code, then the next line, and so on until it's finished, unless there's a command that changes the flow (which we'll learn about in the branching and iteration modules). <br/><br/> Basically, the order of instructions is like the steps in a recipe: they must be followed in sequence for the result to be correct. If the order is changed, the program's result could be different or an error.",
    ch1_example_swift: "Let's look at a simple example in Swift. Suppose we have a few sequential instructions:",
    ch1_example_explanation_title: 'In the code above, each line is executed sequentially from number 1 to 6:',
    ch1_example_explanation_list: `
      <li><b>Line 1:</b> The program prints "Start program".</li>
      <li><b>Line 2:</b> The program creates a variable 'a' containing the value 5.</li>
      <li><b>Line 3:</b> The program creates a variable 'b' containing the value 2.</li>
      <li><b>Line 4:</b> The program calculates a + b (which is 5 + 2 = 7) and stores the result in variable 'c'.</li>
      <li><b>Line 5:</b> The program prints "Sum result:" followed by the value of c (which is 7).</li>
      <li><b>Line 6:</b> The program prints "Program finished".</li>
    `,
    ch1_example_output_title: "The output you'll see in the console if the code is run in the above order is:",
    ch1_example_note: "Note that the order determines the result. If we swap the order of instructions, the result could be different or an error. For example, if we try to print 'c' before calculating it, the program will be confused because 'c' doesn't have a value yet.",
    ch1_analogy: "In daily life, a sequence can be compared to a morning routine. For example, the order: 1) wake up, 2) take a shower, 3) get dressed, 4) have breakfast. If the order is mixed up - for instance, having breakfast before showering, or getting dressed before showering - it's certainly not logical. So, following the correct order is important to achieve the desired outcome. <br/><br/> Similarly, computers are highly dependent on order. They will do exactly what we instruct them to do in the given sequence. A computer cannot guess our intentions; we have to tell it the steps one by one, in order.",
    ch1_exercise1_title: '1. Arrange Algorithm Sequence:',
    ch1_exercise1_desc: "Below are the steps to make hot sweet tea, but they are in a random order. Arrange them in a logical sequence!",
    ch1_exercise1_steps: `A. Pour hot water into the glass.<br/>B. Stir until the sugar dissolves.<br/>C. Put the tea bag in the glass.<br/>D. Add sugar to the glass.<br/>E. Heat water until it boils.<br/>F. Serve the hot sweet tea.`,
    ch1_exercise2_title: '2. Code Tracing:',
    ch1_exercise2_desc: 'Look at the following Swift code snippet and determine what output it will produce when run:',
    ch1_exercise2_q: 'Then, what happens if we randomly swap the positions of these lines of code? Will the output change?',
    ch1_exercise3_title: '3. Sequence and Error:',
    ch1_exercise3_desc: 'Suppose you have the following code:',
    ch1_exercise3_q: "The code above tries to add `x + 5` before the variable `x` is declared. Explain why this code will result in an error related to the concept of sequence.",
    ch1_discussion1_title: '1. Arrange Algorithm Sequence:',
    ch1_discussion1_ans: "The correct order to make hot sweet tea is: E → C → D → A → B → F. Here's why:",
    ch1_discussion1_list: `
      <li><b>E (Heat water until it boils)</b> – This is clearly the first step; the water must be boiling first.</li>
      <li><b>C (Put the tea bag in the glass)</b> – Prepare the glass with a tea bag before pouring water.</li>
      <li><b>D (Add sugar to the glass)</b> – Add sugar to the glass (can be before or after pouring water, but usually sugar is added first to dissolve easily).</li>
      <li><b>A (Pour hot water into the glass)</b> – After the water boils, pour it into the glass containing tea and sugar. The hot water will brew the tea and help dissolve the sugar.</li>
      <li><b>B (Stir until the sugar dissolves)</b> – Stir the tea so the sugar mixes and dissolves completely, making the tea sweet.</li>
      <li><b>F (Serve the hot sweet tea)</b> – Finally, the tea is ready to be served.</li>
    `,
    ch1_discussion1_conclusion: "If the steps above are not followed in order, the result will not be as expected (e.g., how do you stir if the water hasn't been poured?). This is similar to a program: the order must be logical for the output to be correct.",
    ch1_discussion2_title: '2. Code Tracing:',
    ch1_discussion2_ans: 'The Swift code will produce the exact output according to the sequence of the print function calls:',
    ch1_discussion2_conclusion: "The three lines are printed sequentially from top to bottom. If we swap the positions of these lines of code, the output will certainly change to follow the new order. For example, if the code order is changed to print(\"Step 3\") then print(\"Step 1\") then print(\"Step 2\"), the output will be:",
    ch1_discussion2_point: '<b>The point is:</b> The output on the screen follows the order of instructions in the code. A different order = a different output. The computer does not understand the concept of the "correct order" unless we write it; it will execute exactly according to the program sequence.',
    ch1_discussion3_title: '3. Sequence and Error:',
    ch1_discussion3_ans: 'The program will error because it tries to use the variable `x` before it has been declared. This violates the correct instruction sequence. We must define `var x = 10` before using `x` in the operation `x = x + 5`.',
    ch1_discussion3_correct: 'The correct sequence should be:',
    ch1_discussion3_conclusion: "In the incorrect sequence, the line `x = x + 5` is executed first, even though `x` has no value yet – this is the cause of the error. The important lesson: <b>Declare variables first, then use them in subsequent operations.</b> This is in line with the concept of sequence: preliminary steps must be done before the next steps that depend on them.",
    
    // --- CHAPTER 2: BRANCHING ---
    ch2_title: 'Module 2: Branching',
    ch2_intro: 'Imagine you are at a crossroads. Turning left leads to school, turning right leads to the park. You have to choose a direction based on your destination. In life, we often make decisions: if condition A is met, do X; if not, do Y. This concept is called <b>branching</b> in programming.<br/><br/>Branching allows a program to execute different instructions depending on a specific condition. It\'s as if the program can "branch off" to different paths. The most common branching instructions are <b>if</b> and <b>else</b>.',
    ch2_if_else_title: 'Branching with if and else',
    ch2_if_else_desc: 'Essentially, the syntax for branching in Swift is:<br/><br/>The <b>Condition</b> is usually an expression that evaluates to a Boolean value (true/false). Examples: `x > 0` (is x greater than 0?), `value == 100` (is the value equal to 100?), etc.<br/>If the condition is <b>true</b>, the code inside the `{ }` block after `if` is executed.<br/>If it is <b>false</b>, the program jumps to the `{ }` block after `else` and executes that.',
    ch2_example_grade_title: 'Let\'s look at a concrete example. Suppose we want a program to check an exam score and display whether the student Passed or Failed based on a minimum passing grade of 60:',
    ch2_example_grade_explanation: 'In the example above, `nilai` is 75. The condition `nilai >= 60` will be evaluated: 75 >= 60 evaluates to <b>true</b>, so the `if` block is executed and the output is "Lulus". The `else` block is ignored because its condition has been met.<br/><br/>If, for example, `nilai = 50`, then `nilai >= 60` evaluates to <b>false</b>, and the program will enter the `else` block and print "Tidak lulus".',
    ch2_else_if_title: 'We can also add multiple conditions using <b>else if</b>. For example, if we want to assign letter grades (A, B, C, D, or F) based on a score:',
    ch2_else_if_explanation: 'The logic above will check the conditions one by one from the top. For `score = 85`, the first condition (>=90) is false, so it moves to the second condition `score >= 80`, which is true. It will then print "Grade B" and <b>ignore the rest of the branches</b>. Only one block is executed in an if-else-if chain like this, which is the first block whose condition is met.',
    ch2_conditions_title: 'Conditions in Branching',
    ch2_conditions_desc: 'The condition in an `if` statement usually involves comparison or boolean operations. Here are some common comparison operators:',
    ch2_conditions_operators: '`==` (equal to)<br/>`!=` (not equal to)<br/>`>` (greater than)<br/>`<` (less than)<br/>`>=` (greater than or equal to)<br/>`<=` (less than or equal to)',
    ch2_conditions_bool: 'The result of these expressions is always a Boolean (true/false). We can also combine several conditions (e.g., using AND / OR). For a brief example, `if (age >= 13 && age < 18)` means "if age is between 13 and 17 inclusive" (`&&` means both conditions must be true).',
    ch2_analogy: 'Branching can be compared to daily choices: - "If hungry, then eat, else (if not hungry) drink water."<br/>- "If the traffic light is green, go; else (if the light is red) stop."<br/>- "If it rains, bring an umbrella, else no umbrella is needed."<br/><br/>Computers are the same: with branching, we create a program that responds to situations. Without branching, a program would just be linear and wouldn\'t "adapt" to any input or condition.',
    ch2_example_pos_neg_title: 'Swift Code Example with Branching',
    ch2_example_pos_neg_desc: 'Here is a simple program using `if-else` to check a number and report its type (positive, zero, or negative):',
    ch2_example_pos_neg_explanation: 'Let\'s analyze this: If `num = -3`, the first condition `num > 0` is false (since -3 is not > 0), so it proceeds to `else if num == 0`, which is also false. Thus, it enters the final `else` block. The output printed is: Bilangan -3 adalah NEGATIF.',
    
    // --- CHAPTER 3: ITERATION ---
    ch3_title: 'Module 3: Iteration (Looping)',
    ch3_intro: 'Have you ever been asked by your mother to beat a carpet 10 times to clean it? That is an example of repetition in daily life: performing the same action multiple times. In programming, <b>iteration</b> (looping) allows us to repeat a set of instructions automatically, without having to write the same code over and over again.<br/><br/>Imagine if we wanted to print "Hello!" 100 times. Writing `print("Hello!")` a hundred times is certainly not efficient. This is where loops help: we just write one block of code and tell the computer to repeat it as many times as we want or until a certain condition is met.',
    ch3_for_loop_title: '`for` Loop (Looping a Specific Number of Times)',
    ch3_for_loop_desc: 'A `for` loop is used when we know exactly how many times the loop will be executed, or when we want to iterate over every element in a collection (like an array). Its basic syntax in Swift is:<br/><br/>However, a common form for repeating something `n` times is to use a range. Example:',
    ch3_for_loop_explanation: '<b>Explanation:</b> `1...5` is a range from 1 to 5 (inclusive). This means the loop will run with `i` having the value 1, then 2, 3, 4, and finally 5. A total of 5 iterations. In each iteration, the block inside `{ }` is executed.',
    ch3_while_loop_title: '`while` Loop (Looping with a Condition)',
    ch3_while_loop_desc: 'A `while` loop is used to repeat as long as a certain condition is <b>true</b>. Its basic form is:',
    ch3_while_loop_mechanism: '<b>Mechanism:</b> When it reaches `while`, the program evaluates the condition: - If <b>true</b>, it executes the block inside `{ }`, then checks the condition again (next iteration). - If <b>false</b> from the start, the block will not be executed at all (0 iterations). - The loop stops when the condition becomes false.',
    ch3_while_loop_example: 'As a simple example, we will use `while` to count down:',
    ch3_while_loop_important: '<b>Important:</b> Ensure that the variable involved in the loop condition (e.g., `hitung` in the example) is modified inside the loop so that the condition eventually becomes false. If not, you will get an <b>infinite loop</b> where the program keeps repeating endlessly.',
    ch3_repeat_while_title: '`repeat...while` (Minimum Once Loop)',
    ch3_repeat_while_desc: 'Swift also has `repeat { ... } while (condition)` which is similar to `while` but it executes the block <b>at least once</b> before checking the condition at the end. This is useful if we want the block to run a minimum of one time.',
    ch3_analogy: '<li><b>for loop:</b> Imagine you are asked to do 10 push-ups. You know the number from the start, so you do push-ups while counting from 1 to 10, then you are done.</li><li><b>while loop:</b> Imagine you are saving coins in a piggy bank until it is full. You don\'t know exactly how many times you will put a coin in; you will <b>continue</b> saving (repeating the action) as long as the condition "piggy bank is not full" is met. Once it is full (the condition becomes false), you stop.</li>',

    // --- CHAPTER 4: ARRAY ---
    ch4_title: 'Module 4: Array',
    ch4_intro: 'Previously, we learned about variables that store a single value, for example `var name = "Ani"` or `var score = 90`. But what if we have many values of the same type? For instance, the exam scores of 30 students, or a list of classmates\' names. Creating 30 separate variables (score1, score2, ..., score30) is clearly inefficient. The solution is an <b>array</b>.<br/><br/>An array is a data structure that can store a collection of values in a single variable, organized in a specific order. Imagine an array like an egg carton or a box with many compartments: we have one container (the array variable) that holds items in numbered slots.',
    ch4_features_title: 'Key Features of an Array:',
    ch4_features_list: `<li><b>Index:</b> Each element in an array has an index position, usually a number. In Swift (like many other languages), the index starts from <b>0</b> for the first element, 1 for the second, and so on. So, the n-th element has an index of n-1.</li><li><b>Length:</b> This is the total number of elements in the array. It can be obtained with the \`count\` property.</li><li><b>Type:</b> All elements in an array are typically of the <b>same data type</b>. An array of exam scores would all be Int, an array of names would all be String, etc.</li>`,
    ch4_creating_title: 'Creating an Array in Swift',
    ch4_creating_desc: 'In Swift, we can create an array by writing the values between square brackets `[ ]`, separated by commas. Example:',
    ch4_accessing_title: 'Accessing and Modifying an Array',
    ch4_accessing_desc: 'To access an array element, use its index in square brackets after the array name. Example:',
    ch4_methods_title: 'Common Array Operations',
    ch4_methods_list: `
      <li><b>Adding elements:</b> Use the \`append()\` function to add an element to the end of the array.</li>
      <li><b>Changing elements:</b> Access an element by its index and assign a new value.</li>
      <li><b>Removing elements:</b> Use \`remove(at: index)\` to delete an element at a specific index.</li>
      <li><b>Getting the count:</b> Use the \`.count\` property to find out how many elements are in the array.</li>
    `,
    ch4_looping_title: 'Looping Through an Array',
    ch4_looping_desc: 'The `count` property is often used for loops. For instance, if you want to access all indices:<br/><br/>However, an easier way is to use a `for-in` loop directly on the elements:',
    ch4_analogy: 'Think of an array like a set of drawers: - You have a chest of drawers with numbered drawers (0, 1, 2, ...). - You can store one item in each drawer. For example, drawer 0: notebook, drawer 1: colored pencils, drawer 2: ruler. - To get the ruler, you open drawer 2 (because that\'s where it\'s stored). - If you want to add an item, you can add a new drawer at the bottom (append). - If you remove an item, you empty a specific drawer, and the drawers below it move up to replace it (more or less the analogy). - `count` is how many drawers are filled.',

    // --- CHAPTER 5: STRING FUNCTION ---
    ch5_title: 'Module 5: String Functions',
    ch5_intro: 'A <b>String</b> (text) is a very frequently used data type. A string can be a word, a sentence, a paragraph, or even empty text. Example strings: `"Hello, World!"`, `"Apple Developer Academy"`, or even `""` (an empty string with no characters).<br/><br/>In Swift, the string data type is written as `String`. We write string values inside double quotes `" "`.<br/><br/>In this module, we will discuss various basic operations and functions that can be performed on strings: from combining them, counting their length, changing their case (uppercase/lowercase), to checking their content. Processing text is very important - for example, displaying messages to the user, manipulating input, etc.',
    ch5_concatenation_title: 'Creating and Concatenating Strings',
    ch5_concatenation_desc: 'To combine (concatenate) two strings, we can use the `+` operator. An alternative (and more idiomatic in Swift) is to use <b>String Interpolation</b>, which inserts values into a string with the syntax `\\(...)`.',
    ch5_properties_title: 'String Properties and Methods',
    ch5_properties_list: `
      <li><b>Getting Length:</b> To find out how long a string is (number of characters), use the \`.count\` property.</li>
      <li><b>Changing Case:</b> Swift provides functions to change the entire string to uppercase or lowercase: \`.uppercased()\` and \`.lowercased()\`.</li>
      <li><b>Checking Content:</b> You can check if a string starts with, ends with, or contains a certain substring: \`.hasPrefix()\`, \`.hasSuffix()\`, \`.contains()\`. These methods are case-sensitive.</li>
    `,
    ch5_substring_title: 'Getting a Substring',
    ch5_substring_desc: 'Extracting a part of a string (substring) in Swift can be a bit complex for beginners because of its index type. For now, it\'s enough to know that you can get the first character with `.first`, the last with `.last`, or drop characters with `.dropFirst()` or `.dropLast()`.',
    ch5_iteration_title: 'Iterating Over Characters',
    ch5_iteration_desc: 'A string is essentially a collection of characters. We can iterate through each character:',
    
    // --- CHAPTER 6: PSEUDOCODE ---
    ch6_title: 'Module 6: Reading Pseudocode',
    ch6_intro: 'Before writing actual code in Swift (or any language), programmers often write down their solution ideas in the form of <b>pseudocode</b> (sham code). Pseudocode is not a formal programming language syntax, but rather a description of algorithmic steps in a code-like form that is more free and easy for humans to read. Its purpose is to design logic without being tied to the strict rules of a programming language.<br/><br/>Reading pseudocode well will help us understand the flow of an algorithm, which can then be translated into actual code. In an online test like the Apple Developer Academy, you might encounter questions that provide a piece of pseudocode and ask for its output, or ask you to complete the logic. So, the ability to read pseudocode is very important.',
    ch6_features_title: 'Characteristics of Pseudocode',
    ch6_features_list: `
      <li><b>Loose Syntax:</b> It can mix natural language with notations like if/else, for, while.</li>
      <li><b>Not Case-Sensitive:</b> Keywords are often written in uppercase for clarity (IF, THEN), but it's not required.</li>
      <li><b>No Need for Detail:</b> Focus is on *what* is being done, not *how* it's done in code. For example, just write "SET count = 0" without specifying \`Int\`.</li>
      <li><b>Indentation:</b> Used to show blocks of code, e.g., what is inside an IF or a loop.</li>
      <li><b>Mixed Language:</b> Can be in English, another language, or a combination.</li>
    `,
    ch6_tips_title: 'Tips for Reading Pseudocode',
    ch6_tips_list: `
      <li><b>Recognize common keywords:</b> IF, THEN, ELSE, FOR, WHILE, REPEAT, PRINT, READ, SET, RETURN, etc.</li>
      <li><b>Look at indentation:</b> This shows the scope. Something inside an IF only runs if the condition is met.</li>
      <li><b>Simulate step-by-step:</b> Just like we did with the factorial example. Take a sample value and trace the variables and output.</li>
      <li><b>Note loop conditions:</b> Understand when a loop will stop.</li>
      <li><b>Don't get hung up on natural syntax:</b> "PRINT" means print, "READ" means input, \`==\` is for comparison, \`=\` is often for assignment.</li>
    `,
    
    // --- CHAPTER 7: OOP ---
    ch7_title: 'Module 7: Object-Oriented Programming (OOP)',
    ch7_intro: '<b>Object-Oriented Programming (OOP)</b> is a programming paradigm that models a program as a collection of interacting <b>objects</b>. These objects are created based on a <b>class</b>, which defines their attributes and behaviors.<br/><br/>Let\'s use a simple analogy: A <b>class</b> is like a <b>blueprint</b> for a house, while an <b>object</b> is the actual <b>instance</b> (the physical house) built from that blueprint. You can have one house blueprint but build several actual houses from it. Each house has the features defined in the blueprint (number of rooms, color, etc.), but the specific details can differ (house A is blue, house B is green, but the blueprint is the same).',
    ch7_concepts_title: 'Core OOP Concepts',
    ch7_concepts_list: `
      <li><b>Class:</b> A custom data type that describes the attributes (<b>properties</b>) and behaviors (<b>methods</b>) of a type of object. E.g., a \`Car\` class has properties like \`color\`, \`brand\`, \`speed\` and methods like \`drive()\` or \`stop()\`.</li>
      <li><b>Object:</b> A concrete instance of a class, with specific attribute values. E.g., \`car1\` is an object of the \`Car\` class with \`color = "Red"\`, \`brand = "Toyota"\`.</li>
      <li><b>Encapsulation:</b> The concept of bundling data (properties) and functions (methods) together within one unit (a class), and controlling access to them.</li>
      <li><b>Inheritance:</b> A class can inherit properties and methods from another class. For example, \`Cat\` and \`Dog\` classes can inherit from an \`Animal\` class.</li>
    `,
    ch7_why_oop_title: 'Why Use OOP?',
    ch7_why_oop_desc: 'OOP helps organize code:<ul><li><b>Real-world representation:</b> It\'s easy to model entities like Student, Car, Order as classes.</li><li><b>Modular and reusable:</b> Once a class is created, many objects can be made from it, avoiding code duplication.</li><li><b>Abstraction:</b> We can "use" an object through its methods without needing to know its internal details. E.g., we call \`car1.drive()\` without knowing how the engine works.</li></ul>For total beginners, focus on class, object, property, and method.',
    
    // --- CHAPTER 8: VARIABLES & DATA TYPES ---
    ch8_title: 'Module 8: Variables and Data Types',
    ch8_intro: 'A <b>variable</b> is one of the most fundamental concepts in programming. A variable can be thought of as a <b>box</b> or container where we store a value. Each variable has a <b>name</b> and contains a <b>value</b> that we can change (variable = able to vary). With variables, we can store input, calculation results, or any data to be used later.<br/><br/><b>Data Type</b> is closely related to variables. A data type explains what kind of value can be stored in the variable. This is important because the computer needs to know how much memory to allocate and what operations are allowed.',
    ch8_var_let_title: '`var` vs `let` in Swift',
    ch8_var_let_desc: 'In Swift, we declare variables using the keyword <b>`var`</b> (for values that can change) or <b>`let`</b> (for constants, values that cannot be changed after being assigned once).<br/><br/><b>Why have both?</b> Use `let` for values that you know will not change (this is good for safety and optimization). Use `var` for values that will change as the program runs.',
    ch8_data_types_title: 'Common Data Types',
    ch8_data_types_list: `
      <li><b>Int:</b> Integer numbers. E.g., 0, 5, -10, 1000.</li>
      <li><b>Double:</b> Decimal numbers (floating-point). E.g., 3.14, 0.001, -5.0.</li>
      <li><b>Bool:</b> Boolean values, only <b>true</b> or <b>false</b>.</li>
      <li><b>String:</b> Text or a sequence of characters. E.g., "Hello", "A".</li>
      <li><b>Array:</b> An ordered collection of items of the same type.</li>
    `,
    ch8_operations_title: 'Basic Operations on Data Types',
    ch8_operations_desc: '<b>Arithmetic (for numbers):</b> Add `+`, subtract `-`, multiply `*`, divide `/`, modulus `%` (remainder for Int).<br/><b>Comparison (produces Bool):</b> `==`, `!=`, `>`, `<`, `>=`, `<=`.<br/><b>String:</b> Concatenation with `+` or interpolation.',
    
    // --- CHAPTER 9: FUNCTIONS ---
    ch9_title: 'Module 9: Functions',
    ch9_intro: 'Have you noticed that in daily life, we often perform the same tasks repeatedly? For example, every morning we <b>have breakfast</b>, or every time we want to write, we <b>grab a pen</b>. In programming, there are times when we need to run the same code in different places or for different inputs. Instead of writing the same code repeatedly, we can wrap it in a <b>function</b>.<br/><br/>A function is a self-contained block of code designed to perform a specific task. We can think of a function like a <b>machine or tool</b>: it receives <b>input</b>, processes it, and then provides an <b>output</b> or a specific effect.',
    ch9_benefits_title: 'Benefits of Functions:',
    ch9_benefits_list: '<li>More organized code.</li><li>Avoids repetition (DRY: Don\'t Repeat Yourself).</li><li>Easier to test separately.</li><li>Can be reused.</li>',
    ch9_structure_title: 'Function Structure in Swift',
    ch9_structure_desc: 'The general format of a function in Swift is as follows: `func` is the keyword to define a function. Inside the parentheses `(...)`, we define <b>parameters</b> (inputs). The `-> ReturnType` indicates the data type of the value that the function returns. If a function doesn\'t return a value (it just performs an action, like printing), this can be omitted or written as `-> Void`.',
    ch9_calling_title: 'Calling a Function',
    ch9_calling_desc: 'To use a function, we "call" it by its name, providing the required arguments for its parameters.',
    ch9_return_vs_void_title: 'Function with Return vs. Without Return (Void)',
    ch9_return_vs_void_desc: 'A function that <b>returns a value</b> can be used in expressions, and its result can be stored in a variable. A <b>void</b> function (without a return value) simply performs an action (a "side effect"), like printing to the console.',
    
    // --- CHAPTER 10: BOOLEAN LOGIC ---
    ch10_title: 'Module 10: Boolean Logic and Operators',
    ch10_intro: 'Computers fundamentally work with binary logic (true/false, 1/0). A <b>Boolean</b> is a data type that represents a truth value: there are only two possibilities, <b>true</b> or <b>false</b>. Although it seems simple, Boolean logic is the basis of decision-making in programs (branching, conditional loops, etc.).<br/><br/>In the Branching module, we already touched on Booleans in `if` conditions (e.g., `x > 0` produces true/false). Now we will delve deeper into the <b>logical operators</b> and <b>comparison operators</b> that produce or manipulate boolean values.',
    ch10_relational_title: 'Relational Operators',
    ch10_relational_desc: 'Relational operators compare two values and produce a Boolean result.',
    ch10_logical_title: 'Logical Operators',
    ch10_logical_desc: 'Logical operators operate on boolean values:',
    ch10_logical_list: `
      <li><b>AND (&&):</b> \`A && B\` is true only if <b>both</b> A and B are true.</li>
      <li><b>OR (||):</b> \`A || B\` is true if <b>at least one</b> of A or B is true.</li>
      <li><b>NOT (!):</b> \`!A\` gives the opposite of A. If A is true, \`!A\` is false.</li>
    `,
    ch10_truth_tables_title: 'Truth Tables',
    ch10_truth_tables_desc: 'A quick reference for how logical operators work.',
    ch10_combinations_title: 'Combining Logic',
    ch10_combinations_desc: 'We can combine multiple conditions to form complex logic. For example: `(x > 5 && x < 10) || y == 0` means "x is between 6-9 inclusive OR y is equal to 0". Use parentheses `( )` to ensure the desired order of evaluation.',

    // Results Page
    examResults: 'Exam Results',
    learnResults: 'Learn Mode Results',
    noResultsTitle: 'No results found.',
    noResultsSubtitle: 'Complete an exam to see your results here.',
    noLearnResultsSubtitle: 'Complete a learn session to see your results here.',
    startNewExam: 'Start New Exam',
    score: 'Score',
    accuracy: 'Accuracy',
    timeTaken: 'Time Taken',
    detailedReview: 'Detailed Review',
    tryAgain: 'Try Again',
    practiceAgain: 'Practice Again',

    // Categories
    category_assumption: 'Assumption Question',
    category_seating: 'Seating Arrangement',
    category_critical: 'Critical Reasoning',
    category_abstract: 'Abstract Reasoning',
    category_numerical: 'Numerical Reasoning',
    category_verbal: 'Verbal Reasoning',
    category_sequence: 'Sequence',
    category_looping: 'Code Reading (Looping)',
    category_conditional: 'Code Reading (Conditional)',
    category_oop: 'OOP',

    // Question 1
    q1_question: 'Statement: "You are hereby appointed as a programmer with a probation period of one year and your performance will be reviewed at the end of the period for confirmation." - A line in an appointment letter. \n\n Assumptions: \n I. The performance of an individual generally is not known at the time of appointment offer. \n II. Generally an individual tries to prove his worth in the probation period.',
    q1_opt1: 'Only assumption I can be considered as true',
    q1_opt2: 'Only assumption II can be considered as true',
    q1_opt3: 'Either I or II can be considered as true',
    q1_opt4: 'Neither I nor II can be considered as true',
    q1_opt5: 'Both I and II can be considered as true',
    q1_explanation: 'The very purpose of a probation period is to assess the performance of a new employee, which implies their performance is not fully known beforehand (Assumption I). It is also a period for the employee to demonstrate their capabilities (Assumption II). Therefore, both assumptions are implicit in the statement.',

    // Question 2
    q2_question: 'A, P, R, X, S and Z are sitting in a row. S and Z are in the centre. A and P are at the ends. R is sitting to the left of A. Who is to the right of P?',
    q2_opt1: 'A',
    q2_opt2: 'X',
    q2_opt3: 'S',
    q2_opt4: 'Z',
    q2_explanation: 'There are 6 positions. S and Z are in the center (positions 3 and 4). A and P are at the ends (positions 1 and 6). Since R is to the left of A, A must be at the right end (position 6) and P at the left end (position 1). This places R at position 5. The only person left for position 2 is X. Therefore, X is to the right of P.',
    
    // Question 3
    q3_question: 'Many business offices are located in buildings having 2-8 floors. If a building has more than 3 floors, it has a lift. If the above statements are true, which of the following must be true?',
    q3_opt1: '2nd floors do not have lifts',
    q3_opt2: '7th floors have lifts',
    q3_opt3: 'Only floors above the 3rd floors have lifts',
    q3_opt4: 'All floors may be reached by lifts',
    q3_explanation: 'The statement "If a building has more than 3 floors, it has a lift" is a conditional rule. A building with a 7th floor must have more than 3 floors. Therefore, it must have a lift. The other options are not necessarily true.',
    
    // Question 4 (Abstract Reasoning)
    q4_instructions: 'Take a look at the following picture, find the missing figure, which follows the same pattern/rule and mark it as the answer.',
    q4_explanation: 'The pattern is consistent within each row. To get the figure in column 2, the top-left and bottom-right shapes from column 1 are swapped. To get the figure in column 3, the top-right and bottom-left shapes from column 2 are swapped. Applying this rule to the third row, the missing figure is found by swapping the circle and triangle from the second figure in the row.',

    // Question 5
    q5_question: 'What is the value of X in the sequence: 2 | 10 | 40 | 120 | 240 | X',
    q5_opt1: '480',
    q5_opt2: '240',
    q5_opt3: '360',
    q5_opt4: '720',
    q5_explanation: 'The pattern is multiplication by a decreasing factor. 2 * 5 = 10; 10 * 4 = 40; 40 * 3 = 120; 120 * 2 = 240; Therefore, 240 * 1 = 240.',

    // Question 6
    q6_question: 'Find the two statements that together prove that: Kelly has brown hair. \n\n 1: Kelly has long hair \n 2: Rachael has brown hair \n 3: Rachael is ten years old \n 4: Kelly\'s hair is the same colour as Rachael\'s \n 5: Rachael has short hair',
    q6_opt1: '1 & 2',
    q6_opt2: '2 & 4',
    q6_opt3: '1 & 5',
    q6_opt4: '2 & 3',
    q6_opt5: '1 & 4',
    q6_explanation: 'Statement 2 says "Rachael has brown hair". Statement 4 says "Kelly\'s hair is the same colour as Rachael\'s". Combining these two logically proves that Kelly has brown hair.',

    // Question 7
    q7_question: 'Given the following: \n - Input: s (side) \n - Area Perimeter = 4 * s \n The algorithm sequence to calculate area perimeter is...',
    q7_opt1: '1. Store multiplication result as Area Perimeter. 2. Multiply s with four. 3. Input Value of s. 4. Print Area Perimeter as output.',
    q7_opt2: '1. Input Value of s. 2. Multiply s with four. 3. Store multiplication result as Area Perimeter. 4. Print Area Perimeter as output.',
    q7_opt3: '1. Input Value of s. 2. Multiply s with four. 3. Store multiplication result as Area Perimeter. 4. Print s as output.',
    q7_opt4: '1. Input Value of s. 2. Store multiplication result as Area Perimeter. 3. Multiply s with four. 4. Print Area Perimeter as output.',
    q7_explanation: 'The correct logical sequence for a computer program is: first get the input (s), then perform the calculation (multiply by four), then store the result, and finally print the stored result.',

    // Question 8
    q8_question: 'In the following pseudocode: \n\n value y = 0 \n value x = 0 \n\n while x <= 4 \n   y += x \n   x += 1 \n end while \n\n print(y) \n\n What is the output?',
    q8_opt1: '10',
    q8_opt2: '6',
    q8_opt3: '4',
    q8_opt4: '14',
    q8_explanation: 'The loop runs for x = 0, 1, 2, 3, 4. The value of y accumulates the sum of x in each iteration. So, y will be 0 + 1 + 2 + 3 + 4 = 10.',

    // Question 9
    q9_question: 'In the following pseudocode: \n\n value m = 9 \n value n = 6 \n\n if (m > n) \n   print m \n else \n   print n \n end if \n\n What is the correct output?',
    q9_opt1: '6',
    q9_opt2: '9',
    q9_opt3: '96',
    q9_opt4: '69',
    q9_explanation: 'The condition (m > n) is (9 > 6), which is true. Therefore, the code inside the `if` block is executed, and the value of m, which is 9, is printed.',
    
    // Question 10
    q10_question: 'What do we call the metric related to the dependency between objects in an OOP scheme?',
    q10_opt1: 'Generalization',
    q10_opt2: 'Coupling',
    q10_opt3: 'Interface',
    q10_opt4: 'Inheritance',
    q10_explanation: 'Coupling is the measure of the degree of interdependence between modules or objects. Low coupling is desirable as it promotes encapsulation and reusability.',
    
    // Video Embed
    videoErrorPrompt: 'Having trouble with the video? Please',
    refreshButton: 'Refresh',
  },
  id: {
    // Welcome & Mode Select
    welcomeTitle: 'Simulasi Tes Bakat',
    welcomeSubtitle: 'Simulasi ini dirancang untuk membiasakan Anda dengan format dan jenis pertanyaan yang mungkin Anda temui.',
    startButton: 'Mulai',
    pressEnter: 'tekan Enter ↵',
    pressEnterInline: 'tekan Enter ↵',
    chooseMode: 'Pilih Mode Anda',
    chooseModeSubtitle: 'Pilih bagaimana Anda ingin berlatih hari ini.',
    learnMode: 'Mode Latihan',
    learnModeDescription: 'Kerjakan soal satu per satu dengan umpan balik langsung dan penjelasan terperinci. Tanpa tekanan waktu.',
    startLearning: 'Mulai Latihan',
    examMode: 'Simulasi Ujian',
    examModeDescription: 'Ikuti tes berwaktu yang meniru lingkungan ujian sebenarnya. Tinjau hasil Anda di akhir.',
    startExam: 'Mulai Ujian',
    learningModule: 'Modul Belajar',
    learningModuleDescription: 'Pelajari materi dasar pemrograman yang dibutuhkan untuk tes, mulai dari sequence hingga OOP.',
    startReading: 'Mulai Belajar',
    logicHub: 'Pusat Logika',
    logicHubDescription: 'Jelajahi sumber daya eksternal untuk mempertajam keterampilan penalaran logis Anda.',
    backToWelcome: 'Kembali ke Awal',
    backToModeSelect: 'Kembali ke Pilih Mode',
    disclaimer: 'Aplikasi ini ditujukan untuk tujuan pendidikan dan belajar mandiri pribadi saja. Aplikasi ini tidak berafiliasi dengan, didukung oleh, atau dengan cara apa pun terhubung secara resmi dengan Apple Inc.',
    appBy: 'Sebuah aplikasi oleh abrarzha/ikoshura',

    // Test Layout & General UI
    questions: 'Pertanyaan',
    question: 'Pertanyaan',
    endSession: 'Akhiri',
    finishExam: 'Selesai',
    finishSession: 'Selesai',
    previousButton: 'Sebelumnya',
    nextButton: 'Soal Berikutnya',
    nextChapterButton: 'Bab Berikutnya',
    checkAnswer: 'Periksa Jawaban',
    correct: 'Benar!',
    incorrect: 'Salah',
    backButton: 'Kembali',

    // Module Page
    moduleTitle: 'Panduan Belajar Dasar Pemrograman',
    chapters: 'Bab',

    // Module Content Sidebar
    ch1_sidebar_title: 'Bab 1: Sequence',
    ch2_sidebar_title: 'Bab 2: Branching',
    ch3_sidebar_title: 'Bab 3: Iteration',
    ch4_sidebar_title: 'Bab 4: Array',
    ch5_sidebar_title: 'Bab 5: String Function',
    ch6_sidebar_title: 'Bab 6: Pseudocode',
    ch7_sidebar_title: 'Bab 7: OOP',
    ch8_sidebar_title: 'Bab 8: Variabel & Data',
    ch9_sidebar_title: 'Bab 9: Fungsi',
    ch10_sidebar_title: 'Bab 10: Logika Boolean',

    // Module Content - Generic
    introduction: 'Pengantar',
    simple_example: 'Contoh Sederhana',
    real_world_analogy: 'Analogi Dunia Nyata',
    exercises: 'Latihan',
    exercise_discussion: 'Pembahasan Latihan',

    // --- CHAPTER 1: SEQUENCE ---
    ch1_title: 'Modul 1: Sequence (Urutan Instruksi)',
    ch1_intro: "Bayangkan kamu sedang memasak mie instan. Apa yang terjadi jika kamu tidak mengikuti urutan langkah-langkah dengan benar? Misalnya, langsung memasukkan mie sebelum air mendidih, atau menaburkan bumbu sebelum merebus mie. Tentu hasilnya berantakan! Dalam memasak maupun pemrograman, urutan instruksi (sequence) itu penting. <br/><br/> Sequence artinya program menjalankan instruksi satu per satu secara berurutan, dari atas ke bawah. Ini adalah konsep paling dasar dalam algoritma dan pemrograman: komputer akan menjalankan baris kode pertama, lalu baris berikutnya, dan seterusnya hingga selesai, kecuali ada perintah yang mengubah alur (nanti kita pelajari di modul percabangan dan perulangan). <br/><br/> Pada dasarnya, urutan instruksi seperti langkah-langkah resep: harus diikuti sesuai urutannya agar hasilnya benar. Jika urutan diubah, hasil program bisa berbeda atau error.",
    ch1_example_swift: "Mari kita lihat contoh sederhana dalam Swift. Misalkan kita punya beberapa instruksi berurutan:",
    ch1_example_explanation_title: 'Pada kode di atas, setiap baris dijalankan berurutan dari nomor 1 hingga 6:',
    ch1_example_explanation_list: `
      <li><b>Baris 1:</b> Program mencetak "Mulai program".</li>
      <li><b>Baris 2:</b> Program membuat variabel a berisi nilai 5.</li>
      <li><b>Baris 3:</b> Program membuat variabel b berisi nilai 2.</li>
      <li><b>Baris 4:</b> Program menghitung a + b (yaitu 5 + 2 = 7) dan menyimpan hasilnya ke variabel c.</li>
      <li><b>Baris 5:</b> Program mencetak "Hasil penjumlahan:" diikuti nilai c (yaitu 7).</li>
      <li><b>Baris 6:</b> Program mencetak "Program selesai".</li>
    `,
    ch1_example_output_title: "Output yang akan terlihat di konsol jika kode dijalankan sesuai urutan di atas adalah:",
    ch1_example_note: "Perhatikan bahwa urutan menentukan hasil. Jika kita menukar urutan instruksi, hasilnya bisa berbeda atau error. Misalnya, jika kita mencoba mencetak c sebelum menghitungnya, program akan kebingungan karena c belum ada nilainya.",
    ch1_analogy: "Dalam kehidupan sehari-hari, sequence ini bisa diibaratkan rutinitas pagi hari. Misalkan urutan: 1) bangun tidur, 2) mandi, 3) berpakaian, 4) sarapan. Jika urutannya diacak - misalnya sarapan sebelum mandi, atau berpakaian sebelum mandi tentu tidak logis. Jadi, mengikuti urutan yang benar itu penting agar mencapai hasil yang diinginkan. <br/><br/> Demikian pula, komputer sangat bergantung pada urutan. Mereka akan melakukan persis sesuai instruksi kita dalam urutan yang diberikan. Komputer tidak bisa menebak maksud kita; kita harus memberitahu langkah demi langkah dengan runtut.",
    ch1_exercise1_title: '1. Susun Urutan Algoritma:',
    ch1_exercise1_desc: "Di bawah ini adalah langkah-langkah membuat teh manis panas, tetapi urutannya acak. Susunlah agar urutannya logis!",
    ch1_exercise1_steps: `A. Tuang air panas ke dalam gelas.<br/>B. Aduk hingga gula larut.<br/>C. Masukkan teh celup ke dalam gelas.<br/>D. Tambahkan gula ke dalam gelas.<br/>E. Panaskan air hingga mendidih.<br/>F. Sajikan teh manis panas.`,
    ch1_exercise2_title: '2. Menelusuri Kode:',
    ch1_exercise2_desc: 'Perhatikan potongan kode Swift berikut dan coba tentukan apa output yang dihasilkan ketika dijalankan:',
    ch1_exercise2_q: 'Lalu, apa yang terjadi jika kita menukar posisi baris-baris kode tersebut secara acak? Apakah output-nya akan berubah?',
    ch1_exercise3_title: '3. Urutan dan Error:',
    ch1_exercise3_desc: 'Misalkan terdapat kode berikut:',
    ch1_exercise3_q: "Kode di atas mencoba menjumlahkan x + 5 sebelum variabel x dideklarasikan. Jelaskan mengapa kode tersebut akan error terkait dengan konsep sequence.",
    ch1_discussion1_title: '1. Susun Urutan Algoritma:',
    ch1_discussion1_ans: "Urutan yang benar untuk membuat teh manis panas adalah: E → C → D → A → B → F. Berikut alasannya:",
    ch1_discussion1_list: `
      <li><b>E (Panaskan air hingga mendidih)</b> – Ini jelas langkah pertama, air harus mendidih dulu.</li>
      <li><b>C (Masukkan teh celup ke dalam gelas)</b> – Siapkan gelas dengan teh celup sebelum menuang air.</li>
      <li><b>D (Tambahkan gula ke dalam gelas)</b> – Tambahkan gula ke gelas (bisa sebelum atau sesudah menuang air, namun biasanya gula dimasukkan dulu agar mudah larut).</li>
      <li><b>A (Tuang air panas ke dalam gelas)</b> – Setelah air mendidih, tuang ke gelas berisi teh dan gula. Air panas akan menyeduh teh dan membantu melarutkan gula.</li>
      <li><b>B (Aduk hingga gula larut)</b> – Aduk teh sehingga gula tercampur dan larut sepenuhnya, menghasilkan teh manis.</li>
      <li><b>F (Sajikan teh manis panas)</b> – Terakhir, teh siap disajikan.</li>
    `,
    ch1_discussion1_conclusion: "Jika langkah-langkah di atas tidak berurutan, hasilnya tidak sesuai (misal, bagaimana mengaduk kalau airnya belum dituang?). Ini mirip program: urutan harus logis agar keluaran benar.",
    ch1_discussion2_title: '2. Menelusuri Kode:',
    ch1_discussion2_ans: 'Kode Swift akan menghasilkan output persis sesuai urutan pemanggilan fungsi print:',
    ch1_discussion2_conclusion: "Tiga baris tersebut dicetak berurutan dari atas ke bawah. Jika kita menukar posisi baris-baris kode tersebut, output-nya tentu akan berubah mengikuti urutan baru. Misalnya, jika urutan kode diubah menjadi print(\"Langkah 3\") lalu print(\"Langkah 1\") lalu print(\"Langkah 2\"), maka output akan menjadi:",
    ch1_discussion2_point: '<b>Intinya:</b> Output di layar mengikuti urutan instruksi di kode. Urutan berbeda = output berbeda. Komputer tidak memahami konsep "urutan yang benar" kecuali yang kita tulis; ia akan mengeksekusi persis sesuai urutan program.',
    ch1_discussion3_title: '3. Urutan dan Error:',
    ch1_discussion3_ans: 'Program akan error karena mencoba menggunakan variabel x sebelum dideklarasikan. Ini melanggar urutan instruksi yang benar. Kita harus mendefinisikan var x = 10 sebelum menggunakan x dalam operasi x = x + 5.',
    ch1_discussion3_correct: 'Urutan yang benar seharusnya:',
    ch1_discussion3_conclusion: "Pada urutan salah tadi, baris x = x + 5 dieksekusi dulu, padahal x belum ada nilainya – inilah penyebab error. Pelajaran penting: <b>Deklarasikan variabel terlebih dahulu, baru gunakan dalam operasi selanjutnya.</b> Ini sejalan dengan konsep sequence: langkah pendahuluan harus dilakukan sebelum langkah berikut yang bergantung padanya.",
    
    // --- CHAPTER 2: BRANCHING ---
    ch2_title: 'Modul 2: Branching (Percabangan)',
    ch2_intro: 'Sekarang bayangkan kamu berada di persimpangan jalan. Jika belok kiri menuju sekolah, belok kanan menuju taman. Kamu harus memilih arah berdasarkan tujuan. Dalam hidup, kita sering mengambil keputusan: jika kondisi A terpenuhi, lakukan X; jika tidak, lakukan Y. Konsep inilah yang disebut <b>percabangan (branching)</b> dalam pemrograman.<br/><br/>Branching memungkinkan program menjalankan instruksi berbeda tergantung kondisi tertentu. Ibaratnya, program bisa "bercabang" ke jalan yang berbeda. Instruksi percabangan yang paling umum adalah <b>if (jika)</b> dan <b>else (jika tidak)</b>.',
    ch2_if_else_title: 'Percabangan dengan if dan else',
    ch2_if_else_desc: 'Pada intinya, sintaks percabangan dalam Swift adalah:<br/><br/><b>Kondisi</b> biasanya adalah ekspresi yang bernilai Boolean (benar/salah). Contohnya: `x > 0` (apakah x lebih dari 0?), `nilai == 100` (apakah nilai sama dengan 100?), dll.<br/>Jika kondisi tersebut benar (<b>true</b>), maka kode di dalam blok `{ }` setelah `if` dijalankan.<br/>Jika salah (<b>false</b>), program loncat ke blok `{ }` setelah `else` dan menjalankannya.',
    ch2_example_grade_title: 'Mari kita lihat contoh konkretnya. Misalkan kita ingin program memeriksa nilai ujian dan menampilkan apakah Lulus atau Tidak lulus berdasarkan passing grade minimal 60:',
    ch2_example_grade_explanation: 'Pada contoh di atas, `nilai` adalah 75. Kondisi `nilai >= 60` akan dievaluasi: 75 >= 60 bernilai <b>true</b>, sehingga blok `if` dijalankan dan output yang dicetak adalah "Lulus". Blok `else` diabaikan karena kondisinya sudah terpenuhi.<br/><br/>Jika misalnya `nilai = 50`, maka `nilai >= 60` bernilai <b>false</b>, program akan masuk ke blok `else` dan mencetak "Tidak lulus".',
    ch2_else_if_title: 'Kita juga dapat menambahkan beberapa kondisi dengan <b>else if</b>. Misalnya, kita ingin memberi penilaian huruf (A, B, C, D, atau F) berdasarkan skor:',
    ch2_else_if_explanation: 'Logika di atas akan mengecek kondisi satu per satu dari atas. Untuk `score = 85`, kondisi pertama (>=90) false, lanjut ke kondisi kedua `score >= 80` yang true, maka akan mencetak "Grade B" dan <b>mengabaikan sisa percabangan</b>. Hanya satu blok yang dieksekusi dalam rantai if-else-if seperti ini, yaitu blok pertama yang kondisinya terpenuhi.',
    ch2_conditions_title: 'Kondisi dalam Percabangan',
    ch2_conditions_desc: 'Kondisi pada `if` biasanya melibatkan operasi perbandingan atau boolean. Berikut beberapa operator perbandingan yang sering dipakai:',
    ch2_conditions_operators: '`==` (sama dengan)<br/>`!=` (tidak sama dengan)<br/>`>` (lebih besar)<br/>`<` (lebih kecil)<br/>`>=` (lebih besar atau sama dengan)<br/>`<=` (lebih kecil atau sama dengan)',
    ch2_conditions_bool: 'Hasil dari ekspresi tersebut selalu berupa Boolean (true/false). Kita juga bisa menggabungkan beberapa syarat (misal menggunakan AND / OR). Sebagai contoh singkat, `if (umur >= 13 && umur < 18)` artinya "jika umur antara 13 dan 17 inklusif" (`&&` berarti kedua syarat harus true).',
    ch2_analogy: 'Percabangan bisa diibaratkan pilihan kondisi sehari-hari: - “Jika lapar, maka makan, else (jika tidak lapar) maka minum air."<br/>- "Jika lampu hijau, jalan; else (jika lampu merah) berhenti.”<br/>- "Jika hujan, bawa payung, else tidak perlu payung."<br/><br/>Komputer pun begitu: dengan percabangan, kita membuat program merespons situasi. Tanpa percabangan, program akan linear saja dan tidak "menyesuaikan" dengan input atau kondisi apapun.',
    ch2_example_pos_neg_title: 'Contoh Kode Swift dengan Percabangan',
    ch2_example_pos_neg_desc: 'Berikut contoh program sederhana menggunakan percabangan `if-else`. Program akan mengecek sebuah bilangan dan melaporkan jenisnya (positif, nol, atau negatif):',
    ch2_example_pos_neg_explanation: 'Coba kita telaah: Jika `num = -3`, kondisi pertama `num > 0` adalah false (karena -3 tidak > 0), lanjut ke `else if num == 0` juga false, maka masuk ke `else` terakhir. Output yang dicetak: Bilangan -3 adalah NEGATIF.',

    // --- CHAPTER 3: ITERATION ---
    ch3_title: 'Modul 3: Iteration (Perulangan)',
    ch3_intro: 'Pernahkah kamu diminta Ibu untuk memukul karpet 10 kali agar bersih? Itu contoh perulangan dalam kehidupan sehari-hari: melakukan suatu tindakan yang sama berkali-kali. Dalam pemrograman, <b>iteration (perulangan)</b> memungkinkan kita mengulang sekumpulan instruksi berkali-kali secara otomatis, tanpa harus menulis kode yang sama berulang-ulang.<br/><br/>Bayangkan jika kita ingin mencetak "Halo!" 100 kali. Menulis `print("Halo!")` seratus baris tentu tidak efisien. Di sinilah perulangan membantu: kita cukup menulis satu blok kode, dan menyuruh komputer mengulanginya sesuai jumlah yang diinginkan atau sampai kondisi tertentu tercapai.',
    ch3_for_loop_title: '`for` Loop (Perulangan dengan Jumlah Tertentu)',
    ch3_for_loop_desc: '`for` loop digunakan ketika kita tahu dengan jelas berapa kali perulangan akan dilakukan, atau ingin mengiterasi setiap elemen dalam sebuah koleksi (seperti array). Sintaks dasarnya dalam Swift:<br/><br/>Namun bentuk yang umum untuk mengulang sejumlah n kali adalah menggunakan range (rentang angka). Contoh:',
    ch3_for_loop_explanation: '<b>Penjelasan:</b> `1...5` adalah range dari 1 sampai 5 (inklusif 5). Artinya loop akan berjalan dengan `i` bernilai 1, lalu 2, 3, 4, hingga 5. Total 5 kali iterasi. - Setiap iterasi, blok dalam `{ }` dijalankan.',
    ch3_while_loop_title: '`while` Loop (Perulangan dengan Kondisi)',
    ch3_while_loop_desc: '`while` loop digunakan untuk mengulang selama suatu kondisi bernilai <b>true</b>. Bentuk dasarnya:',
    ch3_while_loop_mechanism: '<b>Mekanismenya:</b> saat mencapai `while`, program mengevaluasi kondisi: - Jika <b>true</b>, ia menjalankan blok di dalam `{ }`, lalu kembali mengecek kondisi lagi (iterasi berikutnya). - Jika <b>false</b> di awal, maka blok tidak akan dijalankan sama sekali (0 iterasi). - Loop berhenti ketika kondisi menjadi false.',
    ch3_while_loop_example: 'Contoh sederhana, kita akan menggunakan `while` untuk menghitung mundur:',
    ch3_while_loop_important: '<b>Penting:</b> Pastikan variabel yang terlibat dalam kondisi loop (`hitung` dalam contoh) diubah di dalam loop sedemikian rupa sehingga akhirnya kondisi menjadi false. Jika tidak, kita akan mendapat <b>infinite loop</b> (loop tak berujung) di mana program terus mengulang tanpa henti.',
    ch3_repeat_while_title: '`repeat...while` (Perulangan Minimal Sekali)',
    ch3_repeat_while_desc: 'Swift juga memiliki `repeat { ... } while (kondisi)` yang mirip `while` tapi ia menjalankan blok <b>setidaknya sekali</b> baru cek kondisi di akhir. Ini berguna kalau kita ingin blok dijalankan minimal sekali.',
    ch3_analogy: '<li><b>for loop:</b> Ibarat kamu diminta push-up 10 kali. Kamu tahu dari awal jumlahnya 10, jadi kamu push-up sambil menghitung 1 hingga 10, lalu selesai.</li><li><b>while loop:</b> Ibarat kamu menabung koin selama celengan belum penuh. Kamu tidak tahu persis berapa kali akan memasukkan koin, kamu akan <b>terus</b> menabung (mengulang aksi) selama kondisi "celengan belum penuh" terpenuhi. Begitu celengan penuh (kondisi jadi false), kamu berhenti menabung.</li>',

    // --- CHAPTER 4: ARRAY ---
    ch4_title: 'Modul 4: Array',
    ch4_intro: 'Sebelumnya kita belajar tentang variabel yang menyimpan satu nilai, misalnya `var nama = "Ani"` atau `var skor = 90`. Tapi bagaimana jika kita punya banyak nilai yang sejenis? Misal, skor ujian 30 siswa, atau daftar nama teman sekelas. Membuat 30 variabel terpisah (skor1, skor2, ..., skor30) jelas tidak efisien. Solusinya adalah <b>array</b>.<br/><br/>Array adalah struktur data yang dapat menyimpan sekumpulan nilai dalam satu variabel, terorganisir dalam suatu urutan. Bayangkan array seperti rak telur atau kardus dengan banyak kompartemen: kita punya satu wadah (variabel array) yang berisi item-item bernomor urut.',
    ch4_features_title: 'Ciri utama array:',
    ch4_features_list: `<li><b>Indeks (index):</b> Setiap elemen di array punya posisi indeks, biasanya berupa nomor urut. Di Swift (seperti banyak bahasa lain), indeks array dimulai dari <b>0</b> untuk elemen pertama, 1 untuk elemen kedua, dan seterusnya. Jadi elemen ke-n memiliki indeks n-1.</li><li><b>Panjang array:</b> adalah jumlah elemen di dalamnya. Bisa diperoleh dengan properti \`count\`.</li><li><b>Tipe data:</b> Semua elemen dalam array biasanya bertipe data <b>sama</b>. Array nilai ujian tentu semuanya Int (misal), array nama semuanya String, dll.</li>`,
    ch4_creating_title: 'Membuat Array di Swift',
    ch4_creating_desc: 'Dalam Swift, kita bisa membuat array dengan menuliskan nilai-nilai di antara tanda kurung siku `[ ]`, dipisahkan koma. Contoh:',
    ch4_accessing_title: 'Mengakses dan Memodifikasi Array',
    ch4_accessing_desc: 'Untuk mengakses elemen array, gunakan indeksnya dalam kurung siku setelah nama array. Contoh:',
    ch4_methods_title: 'Operasi Umum pada Array',
    ch4_methods_list: `
      <li><b>Menambah elemen:</b> bisa dengan fungsi \`append()\` untuk menambah di akhir.</li>
      <li><b>Mengubah elemen:</b> akses elemen via indeksnya lalu beri nilai baru.</li>
      <li><b>Menghapus elemen:</b> bisa pakai \`remove(at: index)\`.</li>
      <li><b>Mendapatkan jumlah:</b> gunakan properti \`.count\`.</li>
    `,
    ch4_looping_title: 'Looping pada Array',
    ch4_looping_desc: 'Properti `count` sering dipakai untuk loop. Misal, jika ingin mengakses semua indeks:<br/><br/>Namun cara lebih mudah, gunakan langsung `for-in` untuk elemen:',
    ch4_analogy: 'Pikirkan array seperti deretan laci: - Anda punya sebuah lemari laci bertingkat. Masing-masing laci bernomor (0, 1, 2, ...). - Anda bisa menyimpan satu benda di tiap laci. Misal laci 0: buku tulis, laci 1: pensil warna, laci 2: penggaris. - Untuk mengambil penggaris, Anda membuka laci 2 (karena di situ disimpan). - Jika mau menambah item, Anda bisa tambah laci baru di bawah (append). - Jika menghapus, Anda kosongkan laci tertentu dan laci-laci di bawahnya naik menggantikan (kurang lebih analoginya begitu). - `count` adalah berapa banyak laci terisi.',
    
    // --- CHAPTER 5: STRING FUNCTION ---
    ch5_title: 'Modul 5: String Function',
    ch5_intro: '<b>String</b> (teks) adalah tipe data yang sangat sering digunakan. String bisa berupa kata, kalimat, paragraf, atau bahkan teks kosong. Contoh string: `"Hello, World!"`, `"Apple Developer Academy"`, atau bahkan `""` (string kosong tanpa karakter).<br/><br/>Dalam Swift, tipe data string dituliskan sebagai `String`. Kita menulis nilai string di dalam tanda petik ganda `" "`.<br/><br/>Pada modul ini, kita akan membahas berbagai operasi dan fungsi dasar yang dapat dilakukan pada string: mulai dari menggabungkan, menghitung panjang, mengubah huruf besar/kecil, hingga memeriksa isi string. Mengolah teks sangat penting - misal menampilkan pesan ke user, memanipulasi input, dsb.',
    ch5_concatenation_title: 'Membuat dan Menggabungkan String',
    ch5_concatenation_desc: 'Untuk menggabungkan (concatenate) dua string, kita bisa memakai operator `+`. Alternatif lain (lebih idiomatik di Swift) adalah menggunakan <b>String Interpolation (Interpolasi String)</b>, yaitu menyisipkan nilai ke dalam string dengan sintaks `\\(...)`.',
    ch5_properties_title: 'Properti dan Method String',
    ch5_properties_list: `
      <li><b>Mengetahui Panjang:</b> Untuk mengetahui berapa panjang (jumlah karakter) sebuah string, gunakan properti \`.count\`.</li>
      <li><b>Mengubah Case:</b> Swift menyediakan fungsi untuk mengubah seluruh huruf dalam string menjadi kapital atau kecil: \`.uppercased()\` dan \`.lowercased()\`.</li>
      <li><b>Memeriksa Konten:</b> Bisa cek awalan, akhiran, atau kandungan substring tertentu: \`.hasPrefix()\`, \`.hasSuffix()\`, \`.contains()\`. Fungsi ini case-sensitive.</li>
    `,
    ch5_substring_title: 'Mengambil Bagian String (Substring)',
    ch5_substring_desc: 'Mengambil sebagian string (substring) di Swift bisa agak kompleks untuk pemula karena tipe indeksnya. Cukup tahu bahwa kita bisa mengambil karakter pertama dengan `.first`, terakhir dengan `.last`, atau membuang karakter dengan `.dropFirst()` atau `.dropLast()`.',
    ch5_iteration_title: 'Iterasi per Karakter',
    ch5_iteration_desc: 'String sebenarnya terdiri dari kumpulan karakter. Kita bisa iterasi tiap karakter:',

    // --- CHAPTER 6: PSEUDOCODE ---
    ch6_title: 'Modul 6: Membaca Pseudocode',
    ch6_intro: 'Sebelum menulis kode nyata dalam Swift (atau bahasa apapun), programmer sering menuliskan ide solusi dalam bentuk <b>pseudocode</b> (kode semu). Pseudocode bukanlah sintaks resmi bahasa pemrograman tertentu, melainkan deskripsi langkah-langkah algoritma dalam bentuk mirip kode tapi lebih bebas dan mudah dibaca manusia. Tujuannya untuk merancang logika tanpa terikat aturan ketat bahasa pemrograman.<br/><br/>Membaca pseudocode dengan baik akan membantu kita mengerti alur algoritma, yang kemudian bisa kita terjemahkan ke kode nyata. Dalam online test seperti Apple Developer Academy, Anda mungkin akan bertemu soal yang memberikan potongan pseudocode dan ditanya apa outputnya, atau diminta melengkapi logika. Jadi, kemampuan membaca pseudocode sangat penting.',
    ch6_features_title: 'Ciri-ciri Pseudocode',
    ch6_features_list: `
      <li><b>Sintaks longgar:</b> Boleh campur kata-kata natural dengan notasi seperti if/else, for, while.</li>
      <li><b>Tidak case-sensitive:</b> Biasanya ditulis uppercase untuk keyword agar mudah dibedakan (IF, THEN, etc), tapi tidak wajib.</li>
      <li><b>Tidak perlu detail deklarasi tipe:</b> Fokus di *apa* yang dilakukan, bukan *bagaimana* tepatnya dalam bahasa code. Misal cukup tulis "SET count = 0" tanpa specify \`int\`.</li>
      <li><b>Struktur menjorok (indentasi):</b> Untuk menunjukkan blok kode, misal apa yang ada di dalam IF atau di dalam loop.</li>
      <li><b>Bahasa campuran:</b> Kadang ditulis dalam bahasa Inggris, kadang dalam bahasa Indonesia, atau campuran.</li>
    `,
    ch6_tips_title: 'Tips Membaca Pseudocode',
    ch6_tips_list: `
      <li><b>Kenali kata kunci umum:</b> IF (JIKA), THEN (MAKA), ELSE, FOR/UNTUK, WHILE/SELAMA, REPEAT/ULANGI, PRINT/TULISKAN, READ/BACA, SET/DEKLARASI, RETURN, dll.</li>
      <li><b>Lihat indentasi atau struktur blok:</b> Ini menunjukkan lingkup. Sesuatu di dalam IF hanya jalan kalau kondisinya terpenuhi.</li>
      <li><b>Simulasikan langkah demi langkah:</b> Ambil nilai contoh dan jalankan di pikiran atau di kertas. Lacak perubahan nilai variabel dan output.</li>
      <li><b>Perhatikan kondisi loop dan terminasi:</b> Pastikan memahami kapan loop berhenti.</li>
      <li><b>Jangan terganggu sintaks bahasa natural:</b> Contoh "TULISKAN" = print, "BACA" = input, "==" = banding kesamaan, "=" sering dipakai sebagai assignment (penugasan).</li>
    `,
    
    // --- CHAPTER 7: OOP ---
    ch7_title: 'Modul 7: OOP (Object-Oriented Programming)',
    ch7_intro: '<b>Object-Oriented Programming (Pemrograman Berbasis Objek)</b> adalah paradigma pemrograman yang memodelkan program sebagai kumpulan <b>objek</b> yang berinteraksi. Objek-objek ini dibentuk berdasarkan <b>class (kelas)</b> yang mendefinisikan atribut dan perilaku.<br/><br/>Mari ambil analogi sederhana: <b>Kelas (class)</b> itu seperti <b>blueprint / cetak biru</b> rumah, sedangkan <b>objek</b> adalah <b>instance (perwujudan)</b> nyata dari blueprint tersebut (misal rumah konkretnya). Anda bisa punya satu blueprint Rumah, lalu membangun beberapa rumah nyata berdasarkan blueprint itu. Setiap rumah nyata memiliki ciri yang ditentukan blueprint (jumlah kamar, warna, dsb), tapi nilai detailnya bisa berbeda (rumah A warna biru, rumah B warna hijau, padahal blueprint sama).',
    ch7_concepts_title: 'Konsep Inti OOP',
    ch7_concepts_list: `
      <li><b>Class:</b> tipe data kustom yang mendeskripsikan atribut (<b>properties</b>) dan perilaku (<b>methods</b>) dari objek sejenis. Contoh: Class \`Mobil\` punya atribut \`warna\`, \`merk\`, \`kecepatan\`. Punya method \`jalan()\` atau \`berhenti()\`.</li>
      <li><b>Object:</b> instance konkret dari class, dengan nilai atribut spesifik. Contoh: \`mobil1\` adalah objek dari class Mobil, misal \`warna = "Merah"\`, \`merk = "Toyota"\`.</li>
      <li><b>Encapsulation:</b> Konsep membungkus data (properties) dan fungsi (methods) bersama dalam satu unit (class), serta mengontrol akses.</li>
      <li><b>Inheritance:</b> Class bisa mewarisi properti dan method dari class lain. Misal class \`Kucing\` dan \`Anjing\` bisa mewarisi dari class \`Binatang\`.</li>
    `,
    ch7_why_oop_title: 'Kenapa OOP?',
    ch7_why_oop_desc: 'OOP membantu mengorganisasi kode:<ul><li><b>Representasi dunia nyata:</b> Mudah modelkan entitas seperti Mahasiswa, Mobil, Pesanan, dsb sebagai class.</li><li><b>Modular dan reusable:</b> Sekali buat class, bisa buat banyak object. Menghindari duplikasi kode.</li><li><b>Abstraction:</b> kita bisa "pakai" object melalui method tanpa perlu tahu detail internal. Contoh: kita panggil \`mobil1.jalan()\` tanpa perlu tahu gimana detail mesinnya.</li></ul>Untuk pemula total, fokus ke class, object, property, dan method dulu.',
    
    // --- CHAPTER 8: VARIABLES & DATA TYPES ---
    ch8_title: 'Modul 8: Variabel dan Tipe Data',
    ch8_intro: '<b>Variabel</b> adalah salah satu konsep paling dasar dalam pemrograman. Variabel bisa dianggap seperti <b>kotak</b> atau wadah tempat kita menyimpan nilai. Setiap variabel memiliki <b>nama</b> dan berisi suatu <b>nilai</b> yang bisa kita ganti-ganti (variable = bisa berubah). Dengan variabel, kita bisa menyimpan input, menyimpan hasil perhitungan, atau data apapun untuk digunakan nanti.<br/><br/><b>Tipe Data</b> terkait erat dengan variabel. Tipe data menjelaskan jenis nilai apa yang bisa disimpan di variabel tersebut. Ini penting karena komputer perlu tahu berapa besar memori disediakan dan operasi apa yang boleh dilakukan.',
    ch8_var_let_title: '`var` vs `let` di Swift',
    ch8_var_let_desc: 'Dalam Swift, kita deklarasi variabel menggunakan kata kunci <b>`var`</b> (untuk nilai yang bisa diubah) atau <b>`let`</b> (untuk konstanta, nilai yang tidak bisa diubah setelah sekali di-assign).<br/><br/><b>Mengapa ada var vs let?</b> - Gunakan `let` untuk nilai yang memang tidak akan diubah (ini baik untuk keamanan dan optimasi). - Gunakan `var` untuk nilai yang akan berubah seiring jalannya program.',
    ch8_data_types_title: 'Tipe Data Umum',
    ch8_data_types_list: `
      <li><b>Int:</b> bilangan bulat (Integer). Contoh: 0, 5, -10, 1000.</li>
      <li><b>Double:</b> bilangan desimal (floating-point). Contoh: 3.14, 0.001, -5.0.</li>
      <li><b>Bool (Boolean):</b> nilai kebenaran, hanya <b>true</b> atau <b>false</b>.</li>
      <li><b>String:</b> teks atau kumpulan karakter. Contoh: "Hello", "A".</li>
      <li><b>Array:</b> kumpulan data ber-indeks dengan tipe yang sama.</li>
    `,
    ch8_operations_title: 'Operasi Dasar pada Tipe Data',
    ch8_operations_desc: '<b>Aritmatika (untuk angka):</b> Tambah `+`, kurang `-`, kali `*`, bagi `/`, modulus `%` (sisa bagi untuk Int).<br/><b>Perbandingan (menghasilkan Bool):</b> `==`, `!=`, `>`, `<`, `>=`, `<=`.<br/><b>String:</b> Penggabungan dengan `+` atau interpolasi.',
    
    // --- CHAPTER 9: FUNCTIONS ---
    ch9_title: 'Modul 9: Fungsi',
    ch9_intro: 'Pernahkah kamu memperhatikan bahwa dalam kehidupan sehari-hari, kita sering melakukan tugas yang sama berulang-ulang? Misalnya, setiap pagi kita <b>sarapan</b>, atau setiap kali mau menulis kita <b>mengambil pulpen</b>. Di dunia pemrograman, ada kalanya kita perlu menjalankan kode yang sama di berbagai tempat atau untuk berbagai input. Daripada menulis kode berulang kali, kita bisa membungkusnya dalam sebuah <b>fungsi (function)</b>.<br/><br/>Fungsi adalah blok kode mandiri yang dirancang untuk melakukan tugas tertentu. Kita bisa memikirkan fungsi seperti <b>mesin atau alat</b>: ia menerima <b>input</b>, mengolahnya, lalu memberikan <b>output</b> atau efek tertentu.',
    ch9_benefits_title: 'Manfaat Fungsi:',
    ch9_benefits_list: '<li>Kode lebih terorganisir.</li><li>Menghindari pengulangan (DRY: Don\'t Repeat Yourself).</li><li>Mudah diuji secara terpisah.</li><li>Bisa dipakai ulang (reusable).</li>',
    ch9_structure_title: 'Struktur Fungsi di Swift',
    ch9_structure_desc: 'Format umum sebuah fungsi di Swift: `func` adalah kata kunci untuk mendefinisikan fungsi. Di dalam kurung `(...)` kita definisikan <b>parameter</b> (input). `-> TipeReturn` menunjukkan tipe data yang dikembalikan (return) oleh fungsi. Jika fungsi tidak mengembalikan nilai (hanya melakukan aksi, misal print), maka ini bisa dihilangkan atau ditulis `-> Void`.',
    ch9_calling_title: 'Memanggil Fungsi',
    ch9_calling_desc: 'Untuk menggunakan fungsi, kita "panggil" dengan namanya dan berikan argumen yang dibutuhkan untuk parameternya.',
    ch9_return_vs_void_title: 'Fungsi dengan Return vs Tanpa Return (Void)',
    ch9_return_vs_void_desc: 'Fungsi yang <b>mengembalikan nilai</b> bisa dipakai dalam ekspresi, hasilnya bisa disimpan ke variabel. Fungsi <b>void</b> (tanpa return) hanya melakukan aksi ("efek samping") misal mencetak ke konsol.',
    
    // --- CHAPTER 10: BOOLEAN LOGIC ---
    ch10_title: 'Modul 10: Logika Boolean dan Operator',
    ch10_intro: 'Komputer pada dasarnya bekerja dengan logika biner (benar/salah, 1/0). <b>Boolean</b> adalah tipe data yang merepresentasikan nilai kebenaran: hanya ada dua kemungkinan, <b>true (benar)</b> atau <b>false (salah)</b>. Meskipun terlihat sederhana, Boolean logic adalah dasar pengambilan keputusan di program (percabangan, perulangan syarat, dsb).<br/><br/>Di modul Branching, kita sudah bersinggungan dengan Boolean pada kondisi if (contoh: `x > 0` menghasilkan true/false). Sekarang kita bahas lebih mendalam tentang <b>operator logika</b> dan <b>perbandingan</b> yang menghasilkan atau mengolah boolean.',
    ch10_relational_title: 'Operator Perbandingan (Relational Operators)',
    ch10_relational_desc: 'Operator perbandingan membandingkan dua nilai dan menghasilkan nilai Boolean.',
    ch10_logical_title: 'Operator Logika (Logical Operators)',
    ch10_logical_desc: 'Operator logika mengoperasikan nilai-nilai boolean:',
    ch10_logical_list: `
      <li><b>AND (&&):</b> \`A && B\` true jika <b>kedua</b> A dan B true.</li>
      <li><b>OR (||):</b> \`A || B\` true jika <b>setidaknya satu</b> dari A atau B true.</li>
      <li><b>NOT (!):</b> \`!A\` menghasilkan kebalikan dari A. Kalau A true, \`!A\` jadi false.</li>
    `,
    ch10_truth_tables_title: 'Tabel Kebenaran',
    ch10_truth_tables_desc: 'Referensi cepat cara kerja operator logika.',
    ch10_combinations_title: 'Kombinasi Logika',
    ch10_combinations_desc: 'Kita bisa gabung lebih kompleks. Contoh: `(x > 5 && x < 10) || y == 0` artinya "x antara 6-9 inklusif ATAU y sama dengan 0". Gunakan kurung `( )` untuk memastikan urutan evaluasi yang diinginkan.',
    
    // Results Page
    examResults: 'Hasil Ujian',
    learnResults: 'Hasil Mode Belajar',
    noResultsTitle: 'Tidak ada hasil ditemukan.',
    noResultsSubtitle: 'Selesaikan ujian untuk melihat hasil Anda di sini.',
    noLearnResultsSubtitle: 'Selesaikan sesi belajar untuk melihat hasil Anda di sini.',
    startNewExam: 'Mulai Ujian Baru',
    score: 'Skor',
    accuracy: 'Akurasi',
    timeTaken: 'Waktu yang Digunakan',
    detailedReview: 'Ulasan Rinci',
    tryAgain: 'Coba Lagi',
    practiceAgain: 'Berlatih Lagi',

    // Categories
    category_assumption: 'Pertanyaan Asumsi',
    category_seating: 'Pengaturan Tempat Duduk',
    category_critical: 'Penalaran Kritis',
    category_abstract: 'Penalaran Abstrak',
    category_numerical: 'Penalaran Numerik',
    category_verbal: 'Penalaran Verbal',
    category_sequence: 'Urutan',
    category_looping: 'Membaca Kode (Perulangan)',
    category_conditional: 'Membaca Kode (Kondisional)',
    category_oop: 'OOP',

    // Question 1
    q1_question: 'Pernyataan: "Anda dengan ini diangkat sebagai programmer dengan masa percobaan satu tahun dan kinerja Anda akan ditinjau pada akhir periode untuk konfirmasi." - Sebuah baris dalam surat pengangkatan. \n\n Asumsi: \n I. Kinerja seorang individu umumnya tidak diketahui pada saat penawaran pengangkatan. \n II. Umumnya seorang individu mencoba membuktikan kemampuannya selama masa percobaan.',
    q1_opt1: 'Hanya asumsi I yang dapat dianggap benar',
    q1_opt2: 'Hanya asumsi II yang dapat dianggap benar',
    q1_opt3: 'Salah satu dari I atau II dapat dianggap benar',
    q1_opt4: 'Baik I maupun II tidak dapat dianggap benar',
    q1_opt5: 'Baik I maupun II dapat dianggap benar',
    q1_explanation: 'Tujuan dari masa percobaan adalah untuk menilai kinerja karyawan baru, yang menyiratkan kinerja mereka tidak sepenuhnya diketahui sebelumnya (Asumsi I). Ini juga merupakan periode bagi karyawan untuk menunjukkan kemampuan mereka (Asumsi II). Oleh karena itu, kedua asumsi tersebut tersirat dalam pernyataan.',
    
    // Question 2
    q2_question: 'A, P, R, X, S dan Z sedang duduk dalam satu barisan. S dan Z berada di tengah. A dan P berada di ujung. R duduk di sebelah kiri A. Siapakah yang berada di sebelah kanan P?',
    q2_opt1: 'A',
    q2_opt2: 'X',
    q2_opt3: 'S',
    q2_opt4: 'Z',
    q2_explanation: 'Ada 6 posisi. S dan Z berada di tengah (posisi 3 dan 4). A dan P berada di ujung (posisi 1 dan 6). Karena R berada di sebelah kiri A, maka A harus berada di ujung kanan (posisi 6) dan P di ujung kiri (posisi 1). Ini menempatkan R di posisi 5. Satu-satunya orang yang tersisa untuk posisi 2 adalah X. Oleh karena itu, X berada di sebelah kanan P.',
    
    // Question 3
    q3_question: 'Banyak kantor bisnis berlokasi di gedung yang memiliki 2-8 lantai. Jika sebuah gedung memiliki lebih dari 3 lantai, gedung itu memiliki lift. Jika pernyataan di atas benar, manakah dari berikut ini yang harus benar?',
    q3_opt1: 'Lantai 2 tidak memiliki lift',
    q3_opt2: 'Lantai 7 memiliki lift',
    q3_opt3: 'Hanya lantai di atas lantai 3 yang memiliki lift',
    q3_opt4: 'Semua lantai dapat dijangkau dengan lift',
    q3_explanation: 'Pernyataan "Jika sebuah gedung memiliki lebih dari 3 lantai, gedung itu memiliki lift" adalah aturan kondisional. Sebuah gedung dengan lantai 7 pasti memiliki lebih dari 3 lantai. Oleh karena itu, gedung itu harus memiliki lift. Pilihan lain belum tentu benar.',

    // Question 4 (Abstract Reasoning)
    q4_instructions: 'Perhatikan gambar berikut, temukan gambar yang hilang, yang mengikuti pola/aturan yang sama dan tandai sebagai jawaban.',
    q4_explanation: 'Polanya konsisten di setiap baris. Untuk mendapatkan gambar di kolom 2, bentuk kiri-atas dan kanan-bawah dari kolom 1 ditukar. Untuk mendapatkan gambar di kolom 3, bentuk kanan-atas dan kiri-bawah dari kolom 2 ditukar. Menerapkan aturan ini ke baris ketiga, gambar yang hilang ditemukan dengan menukar lingkaran dan segitiga dari gambar kedua di baris tersebut.',

    // Question 5
    q5_question: 'Berapakah nilai X dalam urutan: 2 | 10 | 40 | 120 | 240 | X',
    q5_opt1: '480',
    q5_opt2: '240',
    q5_opt3: '360',
    q5_opt4: '720',
    q5_explanation: 'Polanya adalah perkalian dengan faktor yang menurun. 2 * 5 = 10; 10 * 4 = 40; 40 * 3 = 120; 120 * 2 = 240; Oleh karena itu, 240 * 1 = 240.',

    // Question 6
    q6_question: 'Temukan dua pernyataan yang bersama-sama membuktikan bahwa: Kelly memiliki rambut cokelat. \n\n 1: Kelly memiliki rambut panjang \n 2: Rachael memiliki rambut cokelat \n 3: Rachael berumur sepuluh tahun \n 4: Rambut Kelly memiliki warna yang sama dengan rambut Rachael \n 5: Rachael memiliki rambut pendek',
    q6_opt1: '1 & 2',
    q6_opt2: '2 & 4',
    q6_opt3: '1 & 5',
    q6_opt4: '2 & 3',
    q6_opt5: '1 & 4',
    q6_explanation: 'Pernyataan 2 mengatakan "Rachael memiliki rambut cokelat". Pernyataan 4 mengatakan "Rambut Kelly memiliki warna yang sama dengan rambut Rachael". Menggabungkan keduanya secara logis membuktikan bahwa Kelly memiliki rambut cokelat.',
    
    // Question 7
    q7_question: 'Diberikan sebagai berikut: \n - Input: s (sisi) \n - Keliling = 4 * s \n Urutan algoritma untuk menghitung keliling adalah...',
    q7_opt1: '1. Simpan hasil perkalian sebagai Keliling. 2. Kalikan s dengan empat. 3. Masukkan Nilai s. 4. Cetak Keliling sebagai output.',
    q7_opt2: '1. Masukkan Nilai s. 2. Kalikan s dengan empat. 3. Simpan hasil perkalian sebagai Keliling. 4. Cetak Keliling sebagai output.',
    q7_opt3: '1. Masukkan Nilai s. 2. Kalikan s dengan empat. 3. Simpan hasil perkalian sebagai Keliling. 4. Cetak s sebagai output.',
    q7_opt4: '1. Masukkan Nilai s. 2. Simpan hasil perkalian sebagai Keliling. 3. Kalikan s dengan empat. 4. Cetak Keliling sebagai output.',
    q7_explanation: 'Urutan logis yang benar untuk program komputer adalah: pertama dapatkan input (s), lalu lakukan perhitungan (kalikan dengan empat), lalu simpan hasilnya, dan terakhir cetak hasil yang disimpan.',

    // Question 8
    q8_question: 'Dalam pseudocode berikut: \n\n nilai y = 0 \n nilai x = 0 \n\n selama x <= 4 \n   y += x \n   x += 1 \n akhir selama \n\n cetak(y) \n\n Apa outputnya?',
    q8_opt1: '10',
    q8_opt2: '6',
    q8_opt3: '4',
    q8_opt4: '14',
    q8_explanation: 'Perulangan berjalan untuk x = 0, 1, 2, 3, 4. Nilai y mengakumulasi jumlah x di setiap iterasi. Jadi, y akan menjadi 0 + 1 + 2 + 3 + 4 = 10.',
    
    // Question 9
    q9_question: 'Dalam pseudocode berikut: \n\n nilai m = 9 \n nilai n = 6 \n\n jika (m > n) \n   cetak m \n selain itu \n   cetak n \n akhir jika \n\n Apa output yang benar?',
    q9_opt1: '6',
    q9_opt2: '9',
    q9_opt3: '96',
    q9_opt4: '69',
    q9_explanation: 'Kondisi (m > n) adalah (9 > 6), yang benar. Oleh karena itu, kode di dalam blok `jika` dieksekusi, dan nilai m, yaitu 9, dicetak.',
    
    // Question 10
    q10_question: 'Apa sebutan untuk metrik yang terkait dengan ketergantungan antar objek dalam skema OOP?',
    q10_opt1: 'Generalization (Generalisasi)',
    q10_opt2: 'Coupling (Ketergantungan)',
    q10_opt3: 'Interface (Antarmuka)',
    q10_opt4: 'Inheritance (Pewarisan)',
    q10_explanation: 'Coupling adalah ukuran tingkat saling ketergantungan antara modul atau objek. Coupling yang rendah diinginkan karena mempromosikan enkapsulasi dan penggunaan kembali.',
    
    // Video Embed
    videoErrorPrompt: 'Video bermasalah? Silakan',
    refreshButton: 'Segarkan',
  }
};