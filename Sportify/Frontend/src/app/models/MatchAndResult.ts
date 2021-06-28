import { MatchDto } from "../openapi";
import { MatchResultHistoryDto } from "../userScoresOpenApi/model/matchResultHistoryDto";

export class MatchAndResult {
  matchDto:MatchDto;
  matchResult: MatchResultHistoryDto;
  selectedTeam: String;
}
