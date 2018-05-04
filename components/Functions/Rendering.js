export default function renderIf(condition, content, other) {
   if (condition)
      return content();
   else
      return other();
}