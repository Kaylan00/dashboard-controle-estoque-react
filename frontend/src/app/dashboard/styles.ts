import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  padding: 0.7rem;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) minmax(300px, 350px) minmax(300px, 350px);
  }
`;

export const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) minmax(350px, 400px);
  }

  .right-panel {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`; 