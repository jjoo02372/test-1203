// 주은영 선생님 자기소개 페이지
// Vanilla JS 환경

console.log('🍎 주은영 선생님의 자기소개 페이지에 오신 것을 환영합니다!')

// 스킬 태그에 호버 효과 추가
document.querySelectorAll('.skill-tag').forEach((tag, index) => {
  tag.style.animationDelay = `${index * 0.1}s`
})

// 페이지 로드 시 인사 메시지
window.addEventListener('load', () => {
  console.log('✨ 오늘도 좋은 하루 되세요!')
})
