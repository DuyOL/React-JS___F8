### Props là gì ?
 - Trong React, "props" (viết tắt của "properties") là một cách để truyền dữ liệu từ component cha sang component con. Props là một đối tượng JavaScript chứa các thuộc tính và giá trị tương ứng, và được truyền vào component con qua các tham số trong hàm render() của component cha.
 - Ví dụ, trong component cha, bạn có thể định nghĩa một prop là name và gán cho nó giá trị "John":
 function ParentComponent() {
  return <ChildComponent name="John" />;
}
Sau đó, trong component con, bạn có thể sử dụng giá trị của prop name như sau:
function ChildComponent(props) {
  return <p>Hello, {props.name}!</p>;
}
Trong trường hợp này, props là một đối tượng chứa tất cả các props được truyền vào component con từ component cha. Bạn có thể truy cập giá trị của prop name bằng cách sử dụng props.name. Kết quả khi render sẽ là Hello, John!.