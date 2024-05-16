import React from 'react';

function AboutPage() {
  return (
    <div className="mt-8 font-bold text-center">
      <h1>About Page</h1>
      <div className="mt-4 p-4 border rounded">
        <h2 className="text-xl">Introduction</h2>
        <p className="mt-2">
          My name is Georgio Charro, and this is my final project for the Discrete Maths course I'm taking at the American University of Science and Technology.
        </p>
        <p className="mt-2">
          The goal of this project is to create a web application that allows users to perform various set operations. This project demonstrates my understanding of key concepts in discrete mathematics, including set theory and logical operations, as well as my ability to apply these concepts using modern web development technologies.
        </p>
        <p className="mt-2">
          Through this project, I aim to showcase my skills in both mathematics and programming, providing an intuitive and educational tool for users to explore and learn about set operations.
        </p>
      </div>
      <div className="mt-4 p-4 border rounded">
        <h2 className="text-xl">How the Code Works</h2>
        <p className="mt-2">
          This application allows users to input two sets of elements and perform various set operations such as complement, intersection, union, difference, and symmetric difference.
        </p>
        <p className="mt-2">
          Here's a brief overview of how the code works:
        </p>
        <ul className="mt-2 text-left list-disc list-inside">
          <li>Users can enter elements for sets A and B, separated by commas.</li>
          <li>When the "Calculate" button is pressed, the application computes the results of various set operations.</li>
          <li>The results are displayed below the input fields, showing the complement of A, the intersection of A and B, the union of A and B, the difference of A and B, and the symmetric difference of A and B.</li>
          <li>A background image with lowered opacity is positioned behind the content for aesthetic purposes.</li>
        </ul>
      </div>
      <div className="mt-4 p-4 border rounded">
        <h2 className="text-xl">Approach and Functionality</h2>
        <p className="mt-2">
          In developing this application, my approach was to break down the problem into smaller, manageable tasks and implement them step-by-step:
        </p>
        <ul className="mt-2 text-left list-disc list-inside">
          <li><strong>Input Handling:</strong> The application takes user inputs for sets A and B as comma-separated values. These inputs are processed and converted into arrays for easier manipulation.</li>
          <li><strong>Set Operations:</strong> The core logic of the application involves performing set operations. This includes calculating the complement of A, intersection of A and B, union of A and B, difference of A and B, and symmetric difference of A and B. These operations are implemented using JavaScript array methods such as <code>filter</code>, <code>map</code>, and <code>concat</code>.</li>
          <li><strong>Display Results:</strong> Once the calculations are complete, the results are displayed dynamically below the input fields. The application updates the state with the results, which triggers a re-render to show the updated values.</li>
        </ul>
        <p className="mt-2">
          The functions for the set operations work as follows:
        </p>
        <ul className="mt-2 text-left list-disc list-inside">
          <li><strong>Complement of A:</strong> This is calculated by finding elements that are in the universal set (combined elements of A and B) but not in set A.</li>
          <li><strong>Intersection of A and B:</strong> This is calculated by finding elements that are present in both sets A and B.</li>
          <li><strong>Union of A and B:</strong> This is calculated by combining elements of both sets A and B and removing duplicates using <code>Set</code> in JavaScript.</li>
          <li><strong>Difference of A and B:</strong> This is calculated by finding elements that are in set A but not in set B.</li>
          <li><strong>Symmetric Difference of A and B:</strong> This is calculated by combining elements that are in set A but not in set B and elements that are in set B but not in set A.</li>
        </ul>
        <p className="mt-2">
          This approach ensures the application is both efficient and easy to understand, making it a useful tool for educational purposes.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
