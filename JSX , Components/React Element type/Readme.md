### React Element type Là Gì ?
 - Trong React, React Element Type là một thuộc tính của đối tượng Element, xác định loại của thành phần React được đại diện bởi Element đó. Nó có thể là một đối tượng React Component hoặc một chuỗi đại diện cho một thẻ HTML hoặc một thẻ HTML tùy chỉnh được định nghĩa bởi người dùng.

 - VD1 :
 const element = <h1>Hello, world!</h1>;
 Trong element này, h1 là React Element Type. Nó xác định rằng đây là một thẻ h1 HTML.

- VD2 :
 class MyComponent extends React.Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}

const element = <MyComponent />;
 - Trong element này, React Element Type là MyComponent, đại diện cho một React Component được định nghĩa bởi người dùng.