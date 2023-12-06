// Function to solve a quadratic equation ax^2 + bx + c = 0
function QuadraticEquation(a, b, c) {
    
    var D = b * b - 4 * a * c;  //This calculates the discriminant (D) using formula b^2 - 4ac   

    /* NATURE OF ROOTS
       D > 0, the roots are real and distinct
       D = 0, the roots are real and equal.
       D < 0, the roots do not exist or the roots are imaginary.
    */    
   
       if (D > 0) {
        // Both roots are real and distinct roots
        var R1 = (-b + Math.sqrt(D)) / (2 * a);     // Applying the formula (-b + square_root(b^2-4ac)/2a ) to find the first root R1
                                                    // Here we can put determinant D in place of b^2-4ac   
        var R2 = (-b - Math.sqrt(D)) / (2 * a);     // Applying the formula (-b - square_root(b^2-4ac)/2a ) to find the second root R2
        return [R1, R2];
    } else if (D === 0) {
        // Two equal real roots
        var R = -b + Math.sqrt(D) / (2 * a);        // Applying the formula (-b + square_root D /2a ) to find the root R
        return [R,R];
    } else {
        /* 
        Complex roots in combination of real and imaginary part 
        for example x = −0.2 ± 0.4i where i is imaginary part
        */
        var real = -b / (2 * a);                              //As the real part of the equation is -b/2a
        var imaginary = Math.sqrt(Math.abs(D)) / (2 * a);     //and the imaginary part of the equation is -/+(square root D/ 2a) 
        return [                                              //as D here is negative number and root of negative number is not real)
            { real: real, imag: imaginary },            
            { real: real, imag: -imaginary }
        ];
    }
}

// Example: Solve 2x^2 - 3x - 5 = 0
var a = 2;
var b = -3;
var c = -5;

var roots = QuadraticEquation(a, b, c);

// Display the result in the console
console.log("Roots of the quadratic equation:", roots);

//Example: Solve 5x^2 + 2x + 1 = 0 (this is complex)
var a = 5;
var b = 2;
var c = 1;

var roots = QuadraticEquation(a, b, c);

// Display the result in the console
console.log("Roots of the complex quadratic equation:", roots);

//Example: Solve x^2 – 4x + 4 = 0 
var a = 1;
var b = -4;
var c = 4;

var roots = QuadraticEquation(a, b, c);

// Display the result in the console
console.log("Roots of the quadratic equation:", roots);